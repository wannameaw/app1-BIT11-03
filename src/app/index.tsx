//นำเข้า  ดู   ข้อความ จาก  ชื่อไลบรารี่
import { StyleSheet, Text, View,Image } from "react-native";

//ส่งออก เริ่มต้น   ฟังก์ชัน   ชื่อฟังก์ชัน
export default function App() {
  //ส่งกลับออกไป
  return (
    <View style={homeStyle.container} >
      {/* ใส่ข้อความ */}

      <Text style={homeStyle.title}>Sasikan</Text>
      
      {/* ใส่ภาพจากไฟล์ */}
      <Image 
      source ={require('@/assets/bigmom.jpg')}
      //นำภาพมาจาก
      style={{
        width:200,//กว้าง
        height:200,//ยาว
        borderRadius:200,//ขอบม่น(ให้กลมคือครึ่งหนึ่งของกว้าง)
        borderWidth:10,//ขนาดกรอบ
        borderColor:"gold",//สีกรอบ
      }}
      />
      <Image
        source ={{uri:"https://seattleschild-com-images.s3.amazonaws.com/wp-content/uploads/2025/12/OtterPupExam12-scaled.jpg"}}

        style={{
        width:200,//กว้าง
        height:200,//ยาว
        borderRadius:2,//ขอบม่น(ให้กลมคือครึ่งหนึ่งของกว้าง)
        
     
      }}
        />
        <View style ={{flexDirection:"row"}}>
          <Text>numnumchok</Text>
         <Text>jiwjeang</Text>
         
        </View>
   
    </View>
  )
}
//สร้างสไตล์ตกแต่ง
const homeStyle = StyleSheet.create({
  //กล่อง
  container: {
    //พื้นหลังสี         แดง
    backgroundColor: "pink",
    flex:1, //ขยายเต็มพื้นที่
    alignItems:"center",
  },
  //มีไว้เผื่อใช้ จะไม่แสดงออกทันที
  title: {
    color:"white",//สีอักษร
    fontSize: 32,//ขนาดอักษร
    fontWeight: 700,//ความหน้าอักษร
    fontStyle:"italic",
    textAlign:"center"
  }
})