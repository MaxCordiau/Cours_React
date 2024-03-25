import Header from '../components/Header';
import Card from '../components/Card';
import '../styles/Card.css';

function Home(){
    return (
    // Fragment <> </> pour éviter de créer un div inutile
    <>  
        <Header/>
        <h1>Page d'accueil</h1>
        <p>lorem</p>
        <Card title="Card 1"/>
        <Card title="Card 2"/>
        <Card title="Card 3"/>
        <Card title="Card 4"/>
    </>
    )
}
export default Home;