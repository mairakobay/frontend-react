import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"
import Footer from "../layout/Footer"
import CardUser from "../ui/CardUser"

const users = [{
    nome: "Maira Kpbayashi",
    email: "mairakobay@gmail.com",
    photo: "https://avatars.githubusercontent.com/u/130098548?v=4"
},
{
    nome: "Maira Kpbayashi",
    email: "mairakobay@gmail.com",
    photo: "https://avatars.githubusercontent.com/u/130098548?v=4"
}
]

const QuemSomos = () => {
    return (
        <>
            <Header />
            <div id="main">
                <Sidebar />  
                <Content>
                    <h1>Quem Somos</h1> 
                    {
                        users.map((user) => {
                            <CardUser /> 

                        }
                        )
                    }                 
                    <CardUser user={user}/>
                      
                    <CardUser />     
                </Content>      
            </div>
            <Footer />
        </>
    )
}

export default QuemSomos