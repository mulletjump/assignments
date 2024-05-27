// src/GoodPriceStores.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoodPriceStores = () => {
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStores = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`api.odcloud.kr/api`, {
                    params: {
                        serviceKey: process.env.REACT_APP_API_KEY,
                        type: 'json',
                    },
                });
                setStores(response.data); // 응답 데이터 구조에 맞게 데이터 설정
            } catch (error) {
                setError('데이터를 불러오는 중 오류가 발생했습니다. 으악!');
            }
            setLoading(false);
        };

        fetchStores();
    }, []);

    if (loading) {
        return <p>로딩 중...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>착한가격업소 현황</h1>
            <ul>
                {stores.map((store) => (
                    <li key={store.id}>
                        {store.name} - {store.address}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GoodPriceStores;
