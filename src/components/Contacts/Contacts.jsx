import './Contacts.scss'

const Contacts = () => {
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts-holder">
                    <h2 className="contacts-title">
                        Наше місцезнаходження
                    </h2>
                    <div className="paragraph-holder">
                        <p>м. Новий Розділ, проспект Тараса Шевченка, 30</p>
                        <p>ТРЦ &ldquo;Новий&ldquo;</p>
                    </div>
                    <div className="map-holder">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10371.163450731226!2d24.1424886!3d49.4695662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a8b90b2c88f73%3A0xeff840782b444132!2z0KLQoNCmINCd0L7QstC40Lk!5e0!3m2!1suk!2sua!4v1679306937731!5m2!1suk!2sua"
                            width="600" height="450" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <h3 className="schedule">Режим роботи</h3>
                    <div className="paragraph-holder">
                        Щодня, 10:00-20:00
                    </div>
                    <h3 className="tele">
                        Телефон
                    </h3>
                    <div className="paragraph-holder">
                        <a className="contact-number" href="tel: (093) 73 000 00">(093) 73 000 00</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;