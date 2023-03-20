import "./RulesOfDelivery.scss"

const RulesOfDelivery = () => {
    return (
        <section className="delivery">
            <div className="container">
                <div className="delivery-holder">
                    <h2 className="delivery-title">
                        Правила доставки
                    </h2>
                    <h3 className="delivery-subt-title">Доставка Новою Поштою</h3>
                    <div className="paragraph-holder">
                        <p>У регіони доставка відбувається через компанію &ldquo;Нова пошта&ldquo; через надійність і швидкість
                            доставки</p>
                    </div>
                    <div className="paragraph-holder">
                        <p>Умови доставки Новою Поштою:</p>
                        <ul className="delivery-list">
                            <li className="delivery-list-item">
                                Сума замовлення не нижче 150 гривень.
                            </li>
                        </ul>
                    </div>
                    <div className="paragraph-holder">
                        <p>Способи оплати доставки Новою Поштою:</p>
                        <ul className="delivery-list">
                            <li className="delivery-list-item">
                                Накладений платіж (платна послуга НП, становить 2% від вартості замовлення + 20грн за
                                переказ коштів)
                            </li>
                            <li className="delivery-list-item">
                                Переказ на карту
                            </li>
                            <li className="delivery-list-item">
                                Доставка здійснюється за тарифами НП.
                            </li>
                        </ul>
                    </div>
                    <div className="paragraph-holder">
                        <p>Час доставки Новою Поштою:</p>
                        <ul className="delivery-list">
                            <li className="delivery-list-item">
                                Замовлення необхідно забрати протягом 5 днів, як воно прибуло на відділення НП;
                            </li>
                            <li className="delivery-list-item">
                                Замовлення зроблені до 17:00 - відправляються в цей же день;
                            </li>
                            <li className="delivery-list-item">
                                Замовлення зроблені після 17:00 - відправляються на наступний день.
                            </li>
                        </ul>
                    </div>
                    <div className="paragraph-holder">
                        <p><span className="bold">Увага! Дорогі наші клієнти, переконливе прохання, не забувайте, будь ласка, свої замовлення
                            на відділеннях НП (термін зберігання 5 днів)!</span></p>
                    </div>
                    <div className="paragraph-holder">
                        <p><span className="bold">Увага! Переконливе прохання, перевіряйте, будь ласка, наявність і правильність товару, який
                            Ви забираєте, безпосередньо на Новій Пошті! Всі питання про невідповідність товару в
                            замовленні Ви можете задати відразу, при його огляді, за номером тел .:(093) 73 000 00!
                            Подальші скарги і претензії по наявності товару в замовленні розглядатися не будуть!</span></p>
                    </div>
                    <h3 className="delivery-subt-title">Самовивіз</h3>
                    <div className="paragraph-holder">
                        <p>Самовивіз здійснюється безпосередньо з наших магазинів, адреси яких вказані на сторінці
                            &ldquo;контакти&ldquo;.</p>
                    </div>
                    <div className="paragraph-holder">
                        <p>Умови самовивозу:</p>
                        <ul className="delivery-list">
                            <li className="delivery-list-item">
                                Зробити замовлення на сайті або за тел (073) 63 000 00
                            </li>
                        </ul>
                    </div>
                    <div className="paragraph-holder">
                        <p>Способи оплати при самовивозі:</p>
                        <ul className="delivery-list">
                            <li className="delivery-list-item">
                                Готівка.
                            </li>
                        </ul>
                    </div>
                    <div className="paragraph-holder">
                        <p>Можливий час самовивозу:</p>
                        <ul className="delivery-list">
                            <li className="delivery-list-item">
                                Замовлення зроблені до 9:30 - можна забрати після 14:00;
                            </li>
                            <li className="delivery-list-item">
                                Замовлення зроблені до 13:30 - можна забрати після 18:00;
                            </li>
                            <li className="delivery-list-item">
                                Замовлення зроблені після 13:30 - можна забрати на наступний день після 14:00;
                            </li>
                        </ul>
                    </div>
                    <div className="paragraph-holder">
                        <p>Після прибуття Вашого замовлення на магазин, Вам прийде СМС-повідомлення на вказаний номер
                            телефону!</p>
                    </div>
                    <div className="paragraph-holder">
                        <p><span className="bold">Увага!Зроблене замовлення резервується на одну добу з моменту прибуття на магазин, будь ласка
                            забирайте свої замовлення вчасно.</span></p>
                    </div>
                    <div className="paragraph-holder">
                        <p><span className="bold">Увага! Переконливе прохання, перевіряйте, будь ласка, наявність і правильність товару, який
                            Ви забираєте! Всі питання про невідповідність товару в замовленні Ви можете задати відразу,
                            при його видачі! Подальші скарги і претензії по наявності товару в замовленні розглядатися
                            не будуть!</span></p>
                    </div>
                    <div className="paragraph-holder">
                        <p>Виникли питання? Телефонуйте за тел. <a className="tele" href="tel: (093) 73 000 00">(093) 73 000 00</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RulesOfDelivery;