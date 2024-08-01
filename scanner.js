const fs = require('fs');
const path = require('path');
const recursive = require('recursive-readdir');
const crypto = require('crypto');

const loadSignatures = () => {
    const signaturesPath = path.join(__dirname, 'malware_signatures.json');
    if (fs.existsSync(signaturesPath)) {
        return JSON.parse(fs.readFileSync(signaturesPath, 'utf-8'));
    } else {
        console.error('Arquivo de assinaturas de malware não encontrado.');
        return [];
    }
};

const knownMalwareHashes = loadSignatures();

const getFileHash = (filePath) => {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash('md5');
        const stream = fs.createReadStream(filePath);

        stream.on('data', (data) => {
            hash.update(data, 'utf8');
        });

        stream.on('end', () => {
            resolve(hash.digest('hex'));
        });

        stream.on('error', (err) => {
            reject(err);
        });
    });
};

const scanDirectory = async (directory) => {
    try {
        const files = await recursive(directory);
        for (const file of files) {
            try {
                const hash = await getFileHash(file);
                if (knownMalwareHashes.includes(hash)) {
                    console.log(`Malware detectado: ${file}`);
                } else {
                    console.log(`Arquivo limpo: ${file}`);
                }
            } catch (err) {
                console.error(`Erro ao calcular hash do arquivo ${file}: ${err.message}`);
            }
        }
    } catch (err) {
        console.error(`Erro ao escanear diretório: ${err.message}`);
    }
};

const directoryToScan = path.join(__dirname, 'directory_to_scan');
scanDirectory(directoryToScan);
