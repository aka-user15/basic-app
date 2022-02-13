import './App.css';

function App() {
  //Add patients
  const patients = [
    {
      name: {
        first: "John",
        last: "Smith"
      },
      allergies: [
        "Lactose Intolerent",
        "Peanut Allergies"
      ],
      prescription: [
        "Tylenol",
        "Ibroprofin",
        "Gabapentin"
      ],
      treatments: [
        {
          type: "Dental",
          date: "3/8/2022"
        },
        {
          type: "Blood Test",
          date: "10/5/2022"
        }
      ]
    },
    {
      name: {
        first: "Raymond",
        last: "Fizzwater"
      },
      allergies: [null],

      prescription: [
        "Tylenol",
      ],
      treatments: [
        {
          type: "Vacccine",
          date: "8/10/2022"
        },
        {
          type: "Blood Test",
          date: "3/3/2022"
        }
      ]
    }
  ]
  return (
    <div className="App">
      <div>
        {patients.map(pat => (
          <div className={(pat.allergies === [null] ? "li2" : "li")}>
            <div className="names">
              <h1>First: {pat.name.first}</h1>
              <h1>Last: {pat.name.last}</h1>
            </div>
            {/* Check for allergies and map over them */}
           { (pat.allergies ? <div className="allergies">
              {pat.allergies.map(val => (
                <h3 style={{
                  color: '#ff0006'
                }}>{val}</h3>
              ))}  
            </div> : <h3>No <br /> Allergies</h3>)}
            
            <div className="treatments">
              <h2>Treatments</h2>
              {/* Map over treatments */}
              {pat.treatments.map(val => (
                <>
                  <h3 style={{
                    color: '#03fafac3'
                  }}>{val.type}</h3>
                  <h3 style={{
                    color: '#03fafa'
                  }}>{val.date}</h3>
                  <br />
                </>
              ))}  
            </div>
            <div className="prescription">
              
              {pat.prescription.map(val => (
                <>
                  <h3 style={{
                    color: '#f0fac2'
                  }}>{val}</h3>
                </>
              ))}  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
