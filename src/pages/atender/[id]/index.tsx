import { useRouter } from 'next/router'

const AtenderMesa = () => {
    const { query } = useRouter()


    
    return <h2>hola {query.id}</h2>
}
export default AtenderMesa