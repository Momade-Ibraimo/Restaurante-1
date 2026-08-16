import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'
import { Button } from '../components/ui'
export default function NotFoundPage(){return <main className="grid min-h-screen place-items-center bg-cream p-5 text-center"><div><span className="mx-auto grid size-20 place-items-center rounded-full bg-brand-50 text-brand-600"><Compass size={38}/></span><p className="mt-6 text-sm font-black text-brand-600">ERRO 404</p><h1 className="mt-2 font-display text-5xl font-bold">Não encontramos esta página.</h1><p className="mx-auto mt-3 max-w-md text-stone-500">Talvez o endereço tenha mudado. O cardápio continua à sua espera.</p><Link to="/"><Button size="lg" className="mt-7">Voltar ao início</Button></Link></div></main>}
