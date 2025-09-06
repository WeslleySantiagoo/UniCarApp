# UniCarApp 🚗

Bem-vindo ao **UniCarApp**!  
Este é um aplicativo de caronas universitárias desenvolvido em React Native com Expo, pensado para facilitar a oferta e busca de caronas entre estudantes.

---

## 📲 Instalação e Execução

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado v18+)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)
- Um emulador Android/iOS ou o app [Expo Go](https://expo.dev/go) no seu celular

### 2. Instale as dependências

No diretório do projeto:

```bash
npm install
```

### 3. Inicie o projeto

```bash
npx expo start -c
```

- Use o QR Code no terminal para abrir no Expo Go (Android/iOS).
- Ou pressione `a` para abrir no emulador Android, `i` para iOS.

---

## 📦 Download do App

Caso prefira, faça o download do arquivo `.apk` pelo link abaixo:

**[Clique aqui para baixar o APK do UniCarApp](https://drive.google.com/file/d/1on7MLK_cE1obTMVjmYW6UjUNh84RIhDr/view?usp=sharing)**


---

## 🗺️ Estrutura do Projeto

```
UniCarApp/
├── app/                # Rotas e telas principais
│   ├── Home/           # Tela inicial e busca de caronas
│   ├── OfferRide/      # Tela para oferecer carona
│   ├── Search/         # Tela de resultados de busca
│   └── SplashScreen/   # Tela de splash
├── components/         # Componentes reutilizáveis (CardRide, Button, etc)
├── services/           # Serviços de API (carona, usuário)
├── assets/             # Imagens, fontes e ícones
├── app.json            # Configuração do Expo
└── package.json
```

---

## 🚦 Como Usar o App

### 1. Splash Screen

Ao abrir, você verá a tela de splash com o logo UniCar.

### 2. Tela Inicial (Home)

- **Buscar Carona:** Preencha os campos de partida, destino e data. Após preencher, você será direcionado para a tela de busca.
- **Oferecer Carona:** Toque no botão "Oferecer carona" para cadastrar uma nova carona.

### 3. Buscar Caronas

- Veja uma lista de caronas disponíveis.
- Toque em um card para ver detalhes da carona e solicitar participação.

### 4. Oferecer Carona

- Preencha os campos obrigatórios: origem, destino, data/hora, preço e vagas.
- Clique em "Cadastrar" para publicar sua carona.
- Aguarde a confirmação de cadastro.

---

## ⚠️ Observação Importante para Oferecer Carona

Para oferecer uma carona, **o usuário deve estar previamente cadastrado de forma externa no banco de dados deployado**.

---

## 🛠️ Funcionalidades

- **Cadastro e busca de caronas**
- **Detalhes do motorista e viagem**
- **Solicitação de carona**
- **Cadastro de preço, vagas e veículo**
- **Interface amigável e responsiva**

---

## 📝 Observações

- O app utiliza uma API hospedada em [https://unicar-w56x.onrender.com](https://unicar-w56x.onrender.com).
- Para rodar em produção, configure as variáveis de ambiente e endpoints conforme necessário.
- O projeto utiliza fontes customizadas (Montserrat, Inter). Certifique-se de que as fontes estão em `assets/fonts`.

---

## 👨‍💻 Desenvolvimento

- **Adicionar novas telas:** Crie uma nova pasta dentro de `app/` e adicione seu arquivo `index.tsx`.
- **Adicionar novos componentes:** Crie arquivos em `components/` e importe onde necessário.
- **Serviços de API:**
  Veja exemplos em `services/caronaService.ts` e `services/userService.ts`.
