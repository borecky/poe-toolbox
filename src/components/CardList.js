import React, { useState, useEffect } from 'react';
import Card from './Card';
import jsonData from '../data/data.json';
import Fuse from 'fuse.js';

const CardList = () => {
    const [data, setData] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const uniqueTags = Array.from(new Set(data.flatMap((card) => card.tags)));

    const handleTagChange = (tag) => {
        setSelectedTags((prevSelectedTags) => {
            if (prevSelectedTags.includes(tag)) {
                return prevSelectedTags.filter((selectedTag) => selectedTag !== tag);
            } else {
                return [...prevSelectedTags, tag];
            }
        });
    };

    useEffect(() => {
        const sortedData = [...jsonData].sort((a, b) => {
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();

            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
        });

        setData(sortedData);
    }, []);


    useEffect(() => {
        const filteredData = selectedTags.length === 0 ? data : data.filter((card) => selectedTags.some((tag) => card.tags.includes(tag)));
        const fuse = new Fuse(filteredData, {
            keys: ['title', 'description', 'tags'],
            includeScore: true,
            threshold: 0.4,
        });
        const results = searchQuery ? fuse.search(searchQuery) : filteredData;
        setSearchResults(results.map((result) => result.item || result));
    }, [data, selectedTags, searchQuery]);

    return (
        <div className='container main'>
            <div class="row justify-content-center">
                <div className='col-md-8'>
                    <h1 className='logo-text'>PoE Toolbox</h1>
                    <p className='text-secondary'>Your one-stop toolbox for Path of Exile, it brings together all the essential tools you need in a simple, fun package. Plan your skill tree, check item prices, and discover top builds - all in one place. Level up your PoE journey with convenience and a touch of excitement! 🎮✨</p>
                </div>
            </div>
            <hr class="hr hr-blurry " />
            <div class="row justify-content-center">
                <div className='col-md-8'>
                    <input
                        type="text"
                        value={searchQuery}
                        className="form-control bg-dark text-light"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Type to search..." />
                </div>
            </div>
            <div className='spacer' />
            <div class="row">
                <div className='col'>
                    <i class="bi bi-tag-fill"></i>
                    <label>Tags:</label>
                    {uniqueTags.map((tag) => (
                        <label key={tag} className={selectedTags.includes(tag) ? 'tag badge bg-success' : 'tag badge bg-secondary text-dark'}>
                            <input
                                type="checkbox"
                                className="badge"
                                value={tag}
                                checked={selectedTags.includes(tag)}
                                onChange={() => handleTagChange(tag)}
                            />
                            {tag}
                        </label>
                    ))}
                </div>
            </div>
            <div className='spacer' />
            <div className='spacer' />
            <div className="row justify-content-center">
                {searchResults.map((card) => (
                    <div key={card.id} className="col-md-3 mb-3"> { }
                        <Card {...card} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardList;
