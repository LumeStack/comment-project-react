import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: './src/assets/icons8-male-user-96.png',
      name: 'Gabriel Silva',
      role: 'QA Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala 👋' },
      { type: 'paragraph', content: 'Estou muito animado em compartilhar com vocês meu mais novo projeto! Depois de muito trabalho duro e dedicação, finalmente estou lançando meu projeto mais recente. 🚀' },
      { type: 'link', content: 'gabe.projeto/projeto' },
    ],
    publishedAt: new Date('2022-11-20'),
  },
  {
    id: 2,
    author: {
      avatarUrl: './src/assets/icons8-female-profile-96.png',
      name: 'Mariana Souza',
      role: 'QA Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Hoje eu gostaria de compartilhar com vocês uma ferramenta incrível para testes de front-end - o Cypress.io! Se você está procurando uma maneira fácil e intuitiva de testar seus aplicativos web, esta é a ferramenta para você.' },
      { type: 'link', content: 'mari.projeto/projeto' },
    ],
    publishedAt: new Date('2022-11-29'),
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
