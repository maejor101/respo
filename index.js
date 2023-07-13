// const { errorMonitor } = require("nodemailer/lib/xoauth2");


const faculties = [
  {
    name: "IT",
    courses: [
      {
        courseName: "Computer Engineering",
        requirements: {
          aps: 30,
          subjects: ['Maths', "Science"],
        },
      },
      {
        courseName: "Information Technology: Software Development",
        requirements: {
          aps: 26,
          subjects: ["Science", 'Maths'],
        },
      },
      {
        courseName: "Information Technology: Web and Application Development",
        requirements: {
          aps: 0,
          subjects: ['Maths', 'Science'],
        },
      },
    ],
  },
  {
    name: "Science",
    courses: [
      {
        courseName: "Biotechnology",
        requirements: {
          aps: 30,
          subjects: ["Maths", "Science", "Life Sciences"],
        },
      },
      {
        courseName: "Chemistry",
        requirements: {
          aps: 26,
          subjects: ["Maths", "Science"],
        },
      },
      {
        courseName: "Industry Physics",
        requirements: {
          aps: 20,
          subjects: ["Maths", "Science"],
        },
      },
    ],
  },
  {
    name: "Art & Design",
    courses: [
      {
        courseName: "Design",
        requirements: {
          aps: 30,
          subjects: ["Maths", "Science"],
        },
      },
      {
        courseName: "Performing Arts",
        requirements: {
          aps: 26,
          subjects: ["Maths", "Science"],
        },
      },
      {
        courseName: "Fine Art",
        requirements: {
          aps: 20,
          subjects: ["Maths", "Science"],
        },
      },
    ],
  },
  {
    name: "Humanities",
    courses: [
      {
        courseName: "Education",
        requirements: {
          aps: 30,
          subjects: ["Maths", "Science", "English"],
        },
      },
      {
        courseName: "Journalism",
        requirements: {
          aps: 26,
          subjects: ["Maths", "Science", "English"],
        },
      },
    ],
  },
];

let select = document.getElementById("apScore");



function compare() {

  let arr = [];
  var aps = select.options[select.selectedIndex].value;
  console.log(aps)
  checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  for (let i = 0; i < checkboxes.length; i++) {
    arr.push(checkboxes[i].value);
  }






  for (let f = 0; f < faculties.length; f++) {
    // console.log(faculties[f]);
    let faculty = faculties[f]
    // console.log(faculty);
    for (let c = 0; c < faculty.courses.length; c++) {
      console.log(faculty.courses[c])
      let course = faculty.courses[c]

      if (aps >= course.requirements.aps) {
        // here student qualifies
        let subs = faculty.courses[c].requirements.subjects
        let drops = document.getElementById('drop')


        if (subs.every(sub => {

          return arr.includes(sub)

        })) {
          console.log('subject requirement MET')
          let item = faculty.courses[c].courseName 



          let o = document.createElement('option')
          o.innerText = item;
          drops.appendChild(o);
          console.log(item);


          // console.log({
          //   requiredSubs: subs,
          //   studentSubs: arr,
          //   requiredAPS: course.requirements.aps,
          //   studentAPS: aps
          // });

          // drops.innerText = JSON.stringify(faculty.courses[c].courseName)
        } else {
          console.log("SUBJECT REQUIREMENT NOT MET")
        }

        console.log('you qualify')

      } else {
        console.log('You DO NOT QUALIFY');
      }


    }
  }


}



function dropdown() {

}
function handle(e) {
  console.log(e)
}