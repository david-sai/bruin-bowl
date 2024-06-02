import React from 'react';
import '../styles/ProfileStyles.css';

export default function profiles({ LeaderboardData }) {
    return(
        <div id="profile">
            <Item data={LeaderboardData} />
        </div>
    );
}

function Item({data}) {
    return (
        <>  {console.log(data)}
            {data.map((value, index) => (
                <div className="flex" key={index}>
                    <div className="item">
                        <img src={value.avatar} alt="" />
                        <div className="info">
                            <h3 className="name text-dark">{value.username}:  </h3>
                        </div>
                    </div>
                    <div className="item">
                        <span>{value.score}</span>
                    </div>
                </div>
            ))}
        </>
    );
}