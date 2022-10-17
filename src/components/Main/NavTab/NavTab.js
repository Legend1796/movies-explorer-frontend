import '../NavTab/NavTab.css'

function NavTab() {

  return (
    <section className='navtab'>
      <div className='navtab__links'>
        <a className='navtab__link' href='#aboutproject'>О проекте</a>
        <a className='navtab__link' href='#techs'>Технологии</a>
        <a className='navtab__link' href='#aboutme'>Студент</a>
      </div>
    </section>
  )
}

export default NavTab;