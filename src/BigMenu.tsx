import React from "react";
import BigMenuItem from "./BigMenuItem";
import Global from "./globalConts";

export default function BigMenu() {
    return (
        <div className="bigmenu">
            {Global.bigmenu.map(e => (
                <BigMenuItem elem={e} key={e.id} />
            ))}
        </div>
    );
}
