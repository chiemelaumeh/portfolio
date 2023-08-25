import React from 'react'
import { useContext } from 'react'
import GeneralContext from '../../context/GeneralContext'
const Backend = () => {
  const { dark, setDark } = useContext(GeneralContext)
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend development</h3>
    <div className="skills__box">
      <div className="skill__group">
        <div className="skills__data">
          <i class="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">Node.js<i class="fas fa-js    "></i></h3>
            {/* <span className="skills__level">Basic</span> */}
          </div>
        </div>

        <div className="skills__data">
          <i class="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">MongoDB</h3>
            {/* <span className="skills__level">Basic</span> */}
          </div>
        </div>

        <div className="skills__data">
          <i class="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">C++</h3>
            {/* <span className="skills__level">Basic</span> */}
          </div>
        </div>

        
      </div>

      <div className="skill__group">
        <div className="skills__data">
          <i class="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">Linux</h3>
            {/* <span className="skills__level">Basic</span> */}
          </div>
        </div>

        <div className="skills__data">
          <i class="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">Python</h3>
            {/* <span className="skills__level">Basic</span> */}
          </div>
        </div>

        <div className="skills__data">
          <i class="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">PostgreSQL</h3>
            {/* <span className="skills__level">Basic</span> */}
          </div>
        </div>


      </div>
    </div>
  </div>
  )
}

export default Backend