import { FollowInfo } from "../components/__init__";
import "../styles/Account.css";

export default function Account() {
    return (
        <div className="account-page__grid">
            <div className="account-page__lc box">
                hz chto tut ya tozhe ne pridumal
            </div>
            <div className="account-page__info box">
                <FollowInfo user_id="1" />
            </div>
            <div className="account-page__buy box">
                <h1>Buy</h1>
            </div>
        </div>
    )
}