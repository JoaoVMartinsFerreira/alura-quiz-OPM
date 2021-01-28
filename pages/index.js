import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widgets';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
/*
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;
*/
export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('useState', name, setName);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz ワンパンマン</title>
        <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
        <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>ワンパンマン QUIZ</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(e) => {
              e.preventDefault();

              router.push(`/quiz?name${name}`);
              console.log('Fazendo uma submissão  pelo react');

              // router manda para a próxima página
            }}
            >
              <Input
                placeholder="Preencha com seu nome"
                onChange={(e) => {
                  console.log(e.target.value);
                  // name = e.target.value;
                  setName(e.target.value);
                }}
              />
              <br />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>AALOOOu</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/yTekilla" />
    </QuizBackground>
  );
}
