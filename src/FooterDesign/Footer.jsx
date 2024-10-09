import footerData from './FooterData';
import FooterDesign from './FooterDesign';
import FooterLine from './Footerline';
import FooterLinks from './Footerlink';


export default function Footer() {
  return (
    <>
    <div className="flex justify-around items-center  mx-40"> 
      {footerData.map((data, index) => (

       <FooterDesign
       key={index}
       details={data.details}
       phonenum={data.phonenum}
       email={data.email}
       index={index} 
       />
       
      ))}
    
    </div>
    <FooterLine/>
    <FooterLinks/>
    </>
  )
}










