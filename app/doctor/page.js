import { DoctorModel } from "@/model/doctors"
const fetchDocs = async()=>{
  try {
    const data = await DoctorModel.find()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
export default async function page() {
  const data = await fetchDocs()
  return (
    <div>

    {data?.map((item)=>{
        
          <table>
          <thead>
          <th>title</th></thead>
          <tbody>
            <td>{item.title}</td>
            <td>{item.description}</td>
          </tbody>
          </table>
      })
    }

    </div>
  )
}
