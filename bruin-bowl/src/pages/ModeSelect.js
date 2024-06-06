import React from "react";
import ModeCategorySelector from '../components/ModeCategorySelector'

function ModeSelect() {
    return (
        <div className="text-2xl mt-4 bg-yellow-600 bg-opacity-5 rounded-3xl p-10 text-bruin-darkgold relative">
            <ModeCategorySelector />
        </div>
    );
}

export default ModeSelect;