import { useSelector } from 'react-redux'
import {lang} from '../utils/languageConstant'
import { useRef } from 'react'
// import client from '../utils/openai'

const GptSearchBar = () => {
  const langKey = useSelector(store=>store.config.lang)
  const searchText = useRef(null)

  // const handleGPTSearch = async ()=>{
  //   console.log(searchText.current.value)
  //   // Make an API call to GPT API and get movie Result
  //   const gptResult = await client.chat.completions.create({
  //     messages: [{ role: 'user', content: searchText.current.value}],
  //     model: 'gpt-4o',
  //   });
    
  //   console.log(gptResult.choices)
  // }

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={e=>e.preventDefault()}>
        <input ref={searchText} type="text" className='p-4 m-4 col-span-9 ' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg '>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
