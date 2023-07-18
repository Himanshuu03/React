
import Card from './Card';
function Tours({title,tours,removeTour,displayTour}) {
  return (
    <div className='container'>
      <div>
        <h2 className='title'>{title}</h2>
      </div>
      <div className='cards'>
        {
            tours.map((e)=>{
                return <Card key={e.id} {...e} removeTour={removeTour} displayTour={displayTour}></Card>
            })
        }
      </div>
    </div>
  );
}
export default Tours;
