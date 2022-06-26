import { useMutation } from '@apollo/client'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CircleNotch } from 'phosphor-react'
import { FormEvent, useState } from 'react'

import CodeMockupImage from '../../public/assets/code-mockup.png'
import { Logo } from '../components/Logo'
import { useCreateSubscriberMutation } from '../graphql/generated'

const HomePage: NextPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const router = useRouter()

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault()

    await createSubscriber({ variables: { name, email } })

    router.replace('/event')
  }

  return (
    <div className="h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{' '}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="flex items-center justify-center gap-4 mt-4 bg-green-500 uppercase py-4 rounded font-bold hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              {loading && <CircleNotch className="animate-spin" size={20} />}

              {loading ? 'Carregando...' : 'Garantir minha vaga'}
            </button>
          </form>
        </div>
      </div>

      <Image
        src={CodeMockupImage}
        className="mt-10 object-contain"
        alt="Code mockup"
      />
    </div>
  )
}

export default HomePage
