# Vibesquad

App live on: https://vibesquad.vercel.app/

## Prerequisites
Before setting up the project, ensure you have the following installed:

Node.js (version 22.x or later): `node -v`
npm (version 10.x or later): `npm -v`
yarn: `npm i -g yarn`

## Setup Instructions
1. Clone the Repository
```sh
git clone https://github.com/Vibe-fi/vibesquad-frontend
cd vibesquad-frontend
```

2. Install Dependencies
Run the following command to install the necessary packages:

```sh
yarn install
```

3. Configure Environment Variables
Create a `.env` file in the root directory (take help from `.env.example`) and add the environment variables.

```sh
cp .env.example .env
```

The Social Login keys will be required and can be obtained from their respective developer portals.

### Run
To start the development server, run:

- `yarn dev`

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure
- **tailwind.config.js**: Configuration for Tailwind CSS.
- **postcss.config.js**: Configuration for PostCSS with Tailwind CSS and Autoprefixer.

Additional Information: 

- **Tailwind CSS**: Utilized for styling the application. Ensure that your components are within the paths specified in the content array of tailwind.config.js.
- **Next.js**: The framework used for building the application. Familiarize yourself with its routing and API handling.
