import React from 'react'
import './Header.scss'
import Card from '../Card/Card'
import Title from '../Title/Title'

const Header = () => {
  return (
    <>
    <Title name="Транспорт" />
    <div className="wrap">
      <Card title="Velik" photo="https://avatars.mds.yandex.net/i?id=5d8eae903ee1ed9cc63938492e5036373f1dafe5-4080605-images-thumbs&n=13" />
      <Card title="Egor" photo="https://avatars.mds.yandex.net/i?id=0577bf1aa2f7abc94d54861043133a344581a46f-5568023-images-thumbs&n=13" />
      <Card title="Шынгыс" photo="https://avatars.mds.yandex.net/i?id=c85b2ee13b81ed6b996d131f4c28f0abbb680e34-12523590-images-thumbs&n=13" />
      <Card  />


    </div>
    </>
  )
}

export default Header