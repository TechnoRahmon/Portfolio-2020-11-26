import React from 'react'
import '../../css/styleV1.css'
export default function Acticle() {
    return (
        <div className="article_container">
            <form>
                <textarea name="article" placeholder="write something..."></textarea>
                <button>post</button>
            </form>
        </div>
    )
}
