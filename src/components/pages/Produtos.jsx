import Footer from "../layout/Footer"
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"


const Produtos = () => {
    return (
        <>
            <Header />
            <div id="main">
                <Sidebar />  
                <Content>
                    <h1>Produtos</h1>
                </Content>      
            </div>
            <Footer />
        </>
    )
}
 

export default Produtos