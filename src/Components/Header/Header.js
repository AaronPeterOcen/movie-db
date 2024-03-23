import React, { Fragment } from "react";
import './Header.css'

const Header = ({ searchMovie, query, setQuery, movies }) => {
    return (
        <Fragment>
            <div className="header">
                <h1 className="title">Movie-Search</h1>

                {/* The Search Form */}

                <div className="search">
                    <form className="search-form" onSubmit={searchMovie}>
                        <label>
                            htmlFor="query"
                            className="name"
                        </label>
                        <input
                            type="text"
                            name="query"
                            placeholder="i.e Oppenhiemmer"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </Fragment>
        )
}

export default Header;