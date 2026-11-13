//นำเข้า  ดู   ข้อความ จาก  ชื่อไลบรารี่
import { StyleSheet, Text, View, Image } from "react-native";

//ส่งออก เริ่มต้น   ฟังก์ชัน   ชื่อฟังก์ชัน
export default function App() {
  //ส่งกลับออกไป
  return (
    <View style={homeStyle.container} >


      {/* ใส่ภาพจากไฟล์ */}
      <Image
        source={require('@/assets/photo.jpg')}
        //นำภาพมาจาก
        style={{
          marginTop: 50,//ระยะห่างด้านบน
          width: 150,//กว้าง
          height: 150,//ยาว
          borderRadius: 150,//ขอบม่น(ให้กลมคือครึ่งหนึ่งของกว้าง)
          borderWidth: 3,//ขนาดกรอบ
          borderColor: "gold",//สีกรอบ
        }}
      />
      <Text style={homeStyle.title}>ศศิกานต์ ทองเพ็ง </Text>
      <Text style={{
        color: "gray",
        marginTop: 5,
      }}>แสกกลางยังโดนเท ปัดเป๋จะเหลือไร</Text>

      <View style={{
        flexDirection: "column",
        padding: 20,
        backgroundColor: "lightblue",
        width: 350,
        height: 125,
        borderRadius: 5,
        marginTop: 20,
        gap: 10,
        justifyContent: "center",
      }}>

        <Text style={{
          fontSize: 17,
        }}>ห้อง BIT.1/1 เลขที่3</Text>
        <Text style={{
          fontSize: 17,
        }}>Email:sasikan.thongpeng@e-tech.ac.th</Text>
        <Text style={{
          fontSize: 17,
        }}>Phone:062-008-5789</Text>
      </View>
      <Text style={{
        marginTop:10,
        color: "black",//สีอักษร
        fontSize: 25,//ขนาดอักษร
        fontWeight: 700,//ความหนาอักษร
        fontStyle: "italic",
        textAlign: "start",
        width: "100%"
      }}>
        ภาพกิจกรรม</Text>

      <View style={{flexDirection:"row",
        width:400,
        justifyContent:"center",
        marginTop:10,
        gap:10,
      }}>
        <Image
        source={{ uri: "https://seattleschild-com-images.s3.amazonaws.com/wp-content/uploads/2025/12/OtterPupExam12-scaled.jpg" }}

        style={{
          width:100,
          height:100,
          borderRadius: 2,//ขอบม่น(ให้กลมคือครึ่งหนึ่งของกว้าง)


        }}
      />
      <Image
        source={{ uri: "https://i.pinimg.com/736x/f7/0a/9f/f70a9f4267fd087ab314e3a5baba774e.jpg" }}

        style={{
          width:100,
          height:100,
        borderRadius: 2,
        }} />

        <Image
        source={{ uri: "https://i.pinimg.com/1200x/26/e7/7b/26e77b64f6af1e300b0af10a5d60fed7.jpg" }}

        style={{
          width:100,
          height:100,
        borderRadius: 2,
        }} />

      </View>
    </View>

  )
}
//สร้างสไตล์ตกแต่ง
const homeStyle = StyleSheet.create({
  //กล่อง
  container: {
    flex: 1, //ขยายเต็มพื้นที่
    alignItems: "center",
    padding: 30,
  },
  //มีไว้เผื่อใช้ จะไม่แสดงออกทันที
  title: {
    color: "black",//สีอักษร
    fontSize: 30,//ขนาดอักษร
    fontWeight: 700,//ความหนาอักษร
    fontStyle: "italic",
    textAlign: "start",

  }
})