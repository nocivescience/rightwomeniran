import { useEffect, useState } from 'react'
import {Navbar} from './components/Navbar';
import {Home} from './components/Home'
import {data} from './files/activities';
import { Gallery } from "./components/Gallery";
import {Form} from './components/Form';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {History} from './components/History'
import mirando from "./images/mirando.jpg";
import anillo from "./images/anillo.jpg";
import blackblondie from "./images/blackblondie.jpg";
import blacklady from "./images/blacklady.jpg";
import chain from "./images/chain.jpg";
import fondo from "./images/fondo.webp";
import fondo3 from "./images/fondo3.jpg";
import jacket from "./images/jacket.jpg";
import laughing from "./images/laughing.jpg";
import morena from "./images/morena.jpg";
import mujertriste from "./images/mujertriste.jpg";
import sombrerorojo from "./images/sombrerorojo.jpg";
import taza from "./images/taza.jpg";
import womandreaming from "./images/womandreaming.jpg";
import matrimonio from "./images/matrimonio.jpg";
import luxury from "./images/luxury.jpg";
import mask from "./images/mask.jpg";
import native from "./images/native.jpg";
import whitehat from "./images/whitehat.jpg";
import pearsing from "./images/pearsing.jpg";
import collar_lujoso from "./images/collar_lujoso.jpg";
import anillo_lujoso from "./images/anillo_lujoso.jpg";
import purpura from "./images/purpura.jpg";
import fotografa from "./images/fotografa.jpg";
import anillo_antiguo from "./images/anillo_antiguo.jpg";
import boda from "./images/boda.jpg";
import manos from "./images/manos.jpg";
import rubia from "./images/rubia.jpg";

function App() {
  const [tasks, setTasks] = useState([])
  useEffect(()=>{
    setTasks(data)
  },[])
  function createTask(titleTasks,descriptionTask,optionTask){
    setTasks([...tasks,{
      id: tasks.length+1,
      title: titleTasks,
      description: descriptionTask,
      option:optionTask
    }])
  }
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/taza' element={<History source={taza} title='Ali Qapu' detail='Ali Qapu Palace (Persian: عالی‌ قاپو, ‘Ālī Qāpū) or the Grand Ali Qapu is an imperial palace in Isfahan, Iran.'/>}/>
          <Route path='/anillo' element={<History source={anillo} title='Tomb of Sayyed Rukn ad-Din' detail='Tomb of Sayyed Rukn ad-Din, The Tomb of Sayyed Rukn ad-Din (Persian: آرامگاه سید رکن الدین) or the Sayyed Rukn ad-Din Madrasa (Persian: مدرسه سید رکن الدین) is a 14th century mausoleum in Yazd, Iran. It is the burial place of Sayyed Rukn ad-Din Mohammad Qazi Hosseini Yazdi (Persian: سید رکن الدین محمد قاضی حسینی یزدی) who served as the chief Qadi of Yazd for a while.'/>}/>
          <Route path='/blacklady' element={<History source={blacklady} title='Imam Reza shrine' detail='The Imam Reza shrine (Persian: حرم امام رضا, romanized: Haram-e Emâm Rezâ, lit. "Sanctuary of Imam Reza") in Mashhad, Iran, is a complex which contains the mausoleum of Imam Reza, the eighth Imam of Twelver Shias. It is the largest mosque in the world by area.'/>}/>
          <Route path='/whitehat' element={<History source={whitehat} title={'Behnam House'} detail='Behnam House is a historical building in Tabriz, Iran. The edifice was built during the later part of the Zand dynasty (1750–1794) and the early part of the Qajar dynasty (1781–1925), as a residential house.'/>}/>
          <Route path='/laughing' element={<History source={laughing} title='Amir Nezam House' detail='The Amir Nezām House (Persian: خانه امیرنظام, Khaneh-e Amir Nezām, Azeri: Emir Nizamin evi), or The Qajar Museum of Tabriz, is a historical building in the Sheshghelan district (Persian: ششگلان), one of the oldest quarters of the city of Tabriz, Iran.'/>}/>
          <Route path='/morena' element={<History source={morena} title='Toghrol Tower' detail='Toghrol Tower (also transliterated Toghrul, Tughrol, or Tughrul) is a 12th-century monument, located in the city of Rey, Iran. Tuğrul Tower is near Rashkan Castle.'/>}/>
          <Route path='/chain' element={<History source={chain} title='Tomb of Hafez' detail='The Tomb of Hafez (Persian: آرامگاه حافظ), commonly known as Hāfezieh (حافظیه), are two memorial structures erected in the northern edge of Shiraz, Iran, in memory of the celebrated Persian poet Hafez.'/>}/>
          <Route path='/blackblondie' element={<History source={blackblondie} title='Persepolis' detail='Persepolis (/pər¨sɛpəlIs/; Old Persian: 𐎱𐎠𐎼𐎿, romanized: Pārsa; New Persian: تخت جمشید, romanized: Takht-e Jamshīd, lit. "Throne of Jamshid") was the ceremonial capital of the Achaemenid Empire (c. 550–330 BC). It is situated in the plains of Marvdasht, encircled by southern Zagros mountains of the Iranian plateau.'/>}/>
          <Route path='/luxury' element={<History source={luxury} title='Milad Tower' detail='The Milad Tower (Persian: برج میلاد Borj-e Milād) (lit. Birth Tower), also known as the Tehran Tower (برج تهران Borj-e Tehrān),[3] is a multi-purpose tower in Tehran, Iran.'/>}/>
          <Route path='/mask' element={<History source={mask} title='Arg of Karim Khan' detail='The Arg of Karim Khan (Persian: ارگ کریم خان, Arg-e Karim Khān) or Karim Khan Citadel, is a citadel located in downtown Shiraz, Iran. It was built as part of a complex during the Zand dynasty.'/>}/>
          <Route path='/native' element={<History source={native} title='Tomb of Esther and Mordechai' detail='The Tomb of Esther and Mordechai (Persian: مقبره استر و مردخای Maq"bare Ester v Murduxay; Hebrew: קבר אסתר ומרדכי Qever Estēr v"Mórdǝḵay; Armenian: Եսթերի և Մորդքեի գերեզմանը Yest’eri yev Mordk’ev gerezmany) is a tomb located in Hamadan, Iran.'/>}/>
          <Route path='/anillo_lujoso' element={<History source={anillo_lujoso} title='Eram Garden' detail='Eram Garden (Persian: باغ ارم, Bāgh-e Eram) is a historic Persian garden in Shiraz, Iran. The garden, and the building within it, are located at the northern shore of the Khoshk River in the Fars province.'/>}/>
          <Route path='/anillo_antiguo' element={<History source={anillo_antiguo} title='Golestan Palace' detail='The Golestan Palace (Persian: کاخ گلستان, Kākh-e Golestān), also transliterated as the Gulistan Palace[1] and sometimes translated as the Rose Garden Palace from Persian language,[1][2] was built in the 16th century, renovated in the 18th century and finally rebuilt in 1865. It is the former official royal Qajar complex in Tehran.'/>}/>
          <Route path='/boda' element={<History source={boda} title='Nasir-ol-Molk Mosque' detail='The Nasir al-Mulk Mosque (Persian: مسجد نصیر الملک Masjed-e Nasir ol-Molk), also known as the Pink Mosque (مسجد صورتی Masjed-e Surati), is a traditional mosque in Shiraz, Iran. It is located near Shāh Chérāgh Mosque. It was built during Qajar dynasty rule of Iran.'/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App