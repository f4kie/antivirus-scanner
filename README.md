
# Node Antivirus Scanner

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

Um scanner de antivírus básico escrito em Node.js que verifica arquivos em um diretório específico em busca de assinaturas de malware conhecidas.

## 📋 Funcionalidades

- 🚀 Escaneia recursivamente todos os arquivos em um diretório especificado.
- 🔍 Calcula o hash MD5 de cada arquivo.
- ⚖️ Compara os hashes com uma lista de assinaturas de malware conhecidas.
- 🔔 Informa se algum arquivo corresponde a uma assinatura de malware conhecida.

## 🛠️ Requisitos

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/)

## 📦 Instalação

1. Clone o repositório para o seu ambiente:

   ```sh
   git clone https://github.com/f4kie/antivirus-scanner.git
   cd antivirus-scanner
   ```

2. Instale as dependências do projeto:

   ```sh
   npm install
   ```

3. Coloque os arquivos que você deseja escanear no diretório `directory_to_scan`.

## 🚀 Uso

Para executar o scanner, use o seguinte comando:

```sh
node scanner.js
```

O scanner irá recursivamente verificar todos os arquivos no diretório `directory_to_scan` e informar se algum arquivo corresponde a uma assinatura de malware conhecida.

## ✍️ Adicionar Assinaturas de Malware

Para adicionar novas assinaturas de malware, edite o arquivo `malware_signatures.json` e adicione os hashes MD5 dos arquivos de malware conhecidos.

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Desenvolvido com ❤️ por [f4kie](https://github.com/f4kie)


### Notas

1. **Badges**: Adicionei badges para Node.js e licença MIT para dar um toque visual agradável.
2. **Ícones**: Usei emojis para destacar as seções, tornando o `README` mais visualmente atraente.
3. **Link para o perfil**: No final, adicionei um link para o seu perfil do GitHub. Você pode personalizar com seu nome e link.
