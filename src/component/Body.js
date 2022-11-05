import React from 'react';
import githubIcon from '../images/Icon (1).svg';
import slackIcon from '../images/icons8-slack-new.svg';
import Button from './Button';



const Body = () => {
  return (
    <div>
        <div className="bodybox">
           <Button link={'https://twitter.com/'} id={'twitter'} linkName={'Twitter'} />
           <Button link={'https://training.zuri.team/'} id={'btn_zuri'} linkName={'Zuri Team'} />
           <Button link={'https://books.zuri.team/'} id={'books'} linkName = {'Books'} />
           <Button link={'https://books.zuri.team/'} id={'books_python'} linkName = {'Python Books'} />
           <Button link={'https://background.zuri.team/'} id={'pitch'} linkName= {'Background Check for Coders'} />
           <Button link={'https://books.zuri.team/design-rules'} id={'books__design'} linkName= {'Design Books'} />
           <Button link={'/contact'} id={'contact'} linkName= {'Contact Me'} />
       </div> 

       <div className='slack-giticons'>
          <img src={slackIcon} alt='' className='slackicon' />
          <img src={githubIcon} alt='' className='github' />
       </div>
    </div>
  )
}

export default Body