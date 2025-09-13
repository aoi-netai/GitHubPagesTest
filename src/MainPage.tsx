import Header from './Documents/assets/Header';
import { Link } from "react-router-dom";
import "./MainPage.css";

export default function MainPage() {

    return(
        
        <div>

            <Header type="" number="" title="メインページ" />

            <Link to="/basic_01">
                <button className="button">基礎編1 LEDをつけよう</button>
            </Link>

        </div>  
    )
}
