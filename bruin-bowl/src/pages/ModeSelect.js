import React from "react";
import ModeCategorySelector from '../components/ModeCategorySelector'

function ModeSelect() {
    return (
            <p className="text-2xl">
                <div className="mt-4 bg-yellow-600 bg-opacity-5 rounded-3xl p-10 text-bruin-darkgold relative">
                    <ModeCategorySelector />
                </div>
            </p>
    );
}

export default ModeSelect;