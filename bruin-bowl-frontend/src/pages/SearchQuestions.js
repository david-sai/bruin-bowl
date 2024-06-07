import React from "react";
import SearchBar from "../components/SearchBar";


function SearchQuestions() {
    return (
            <p className="text-2xl">
                <div className="mt-4 bg-yellow-600 bg-opacity-5 rounded-3xl p-10 text-bruin-darkgold relative">
                    <SearchBar />
                </div>
            </p>
    );
}

export default SearchQuestions;