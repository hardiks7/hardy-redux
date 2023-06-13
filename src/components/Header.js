import React from 'react'

function Header(props) {
    console.warn("Header",props.data)

    return (
        <div>
            <div className='add-to-cart'>
                <span className='Cart-count'>{props.data.length}</span>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStg_5qW_HqaOJbiouVrSiuuTaoxHGjhgqA0l9mSSYsMH3aCs2EK5C4OxyWi1fhnWPflAI&usqp=CAU'></img>
            </div>
            
        </div>
    )
}
export default Header


