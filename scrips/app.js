var app = angular.module('colegio',[]);
app.controller("colegioCtrl",function($scope){
    
    $scope.ejemplo="Colegio Sagrado Corazón de Jesús";  
     
  
    var data = {

        "nombre":"Colegio Sgrado Corazón de Jesús",
        "estudiantes":548,
        "profesores":39,
        "grados":11,
        "cursos":22,
        "primaria":[  
           {  
              "estudiantes":200,
              "profesores":15,
              "grados":5,
              "cursos":10,
              "curso":[  
                 {  
                    "grado":1,
                    "curso":"a",
                    "profesores":2,
                    "profesor":[  
                       {  
                          "nombre":"Miles Petty",
                          "suplente":false
                       },
                       {  
                          "nombre":"Florence Keith",
                          "suplente":true
                       }
                    ],
                    "estudiantes":20,
                    "estudiante":[  
                       {  
                          "nombre":"Cheri Brady",
                          "nota":3
                       },
                       {  
                          "nombre":"Shawn Barker",
                          "nota":7
                       },
                       {  
                          "nombre":"Salinas Richardson",
                          "nota":3
                       },
                       {  
                          "nombre":"Tara Rojas",
                          "nota":4
                       },
                       {  
                          "nombre":"Melba Ruiz",
                          "nota":6
                       },
                       {  
                          "nombre":"Eleanor Knowles",
                          "nota":10
                       },
                       {  
                          "nombre":"Ortega Higgins",
                          "nota":7
                       },
                       {  
                          "nombre":"Jaclyn Meadows",
                          "nota":9
                       },
                       {  
                          "nombre":"Young Bradshaw",
                          "nota":4
                       },
                       {  
                          "nombre":"Bobbie Jarvis",
                          "nota":8
                       },
                       {  
                          "nombre":"Durham Hays",
                          "nota":0
                       },
                       {  
                          "nombre":"Roxie Nguyen",
                          "nota":1
                       },
                       {  
                          "nombre":"Walters Morris",
                          "nota":4
                       },
                       {  
                          "nombre":"Montgomery Frederick",
                          "nota":8
                       },
                       {  
                          "nombre":"Karina Farmer",
                          "nota":10
                       },
                       {  
                          "nombre":"Hill Bowers",
                          "nota":3
                       },
                       {  
                          "nombre":"Tanya Robles",
                          "nota":4
                       },
                       {  
                          "nombre":"Shelly Guzman",
                          "nota":1
                       },
                       {  
                          "nombre":"Valenzuela Sampson",
                          "nota":6
                       },
                       {  
                          "nombre":"Leslie Mcintyre",
                          "nota":2
                       }
                    ]
                 },
                 {  
                    "grado":1,
                    "curso":"b",
                    "profesores":2,
                    "profesor":[  
                       {  
                          "nombre":"Florence Keith",
                          "suplente":true
                       },
                       {  
                          "nombre":"Lowery Duran",
                          "suplente":false
                       }
                    ],
                    "estudiantes":20,
                    "estudiante":[  
                       {  
                          "nombre":"Acosta Douglas",
                          "nota":3
                       },
                       {  
                          "nombre":"Cline Foster",
                          "nota":2
                       },
                       {  
                          "nombre":"Mullins Bridges",
                          "nota":0
                       },
                       {  
                          "nombre":"Jan Weiss",
                          "nota":6
                       },
                       {  
                          "nombre":"Becky Dixon",
                          "nota":1
                       },
                       {  
                          "nombre":"Sheena Santana",
                          "nota":10
                       },
                       {  
                          "nombre":"Jannie Pugh",
                          "nota":9
                       },
                       {  
                          "nombre":"Nguyen Bullock",
                          "nota":0
                       },
                       {  
                          "nombre":"Sallie Gill",
                          "nota":8
                       },
                       {  
                          "nombre":"Yates Jackson",
                          "nota":4
                       },
                       {  
                          "nombre":"Pearl Shepard",
                          "nota":5
                       },
                       {  
                          "nombre":"Ina Molina",
                          "nota":3
                       },
                       {  
                          "nombre":"Keisha Hester",
                          "nota":6
                       },
                       {  
                          "nombre":"Loretta Chambers",
                          "nota":7
                       },
                       {  
                          "nombre":"Lancaster Chaney",
                          "nota":3
                       },
                       {  
                          "nombre":"Benson Velez",
                          "nota":4
                       },
                       {  
                          "nombre":"Tina Miles",
                          "nota":3
                       },
                       {  
                          "nombre":"Peggy Giles",
                          "nota":4
                       },
                       {  
                          "nombre":"Whitaker Aguilar",
                          "nota":5
                       },
                       {  
                          "nombre":"Lou Parsons",
                          "nota":8
                       }
                    ]
                 },
                 {  
                    "grado":2,
                    "curso":"a",
                    "profesores":2,
                    "profesor":[  
                       {  
                          "nombre":"Latoya Stout",
                          "suplente":true
                       },
                       {  
                          "nombre":"Mcintyre Ortega",
                          "suplente":false
                       }
                    ],
                    "estudiantes":20,
                    "estudiante":[  
                       {  
                          "nombre":"Rodriguez Shannon",
                          "nota":6
                       },
                       {  
                          "nombre":"Crystal Ferguson",
                          "nota":8
                       },
                       {  
                          "nombre":"Liliana Weber",
                          "nota":9
                       },
                       {  
                          "nombre":"Judith Peck",
                          "nota":6
                       },
                       {  
                          "nombre":"Marta Rodriguez",
                          "nota":9
                       },
                       {  
                          "nombre":"Rollins Crawford",
                          "nota":4
                       },
                       {  
                          "nombre":"Natalia Adams",
                          "nota":2
                       },
                       {  
                          "nombre":"Todd Crane",
                          "nota":8
                       },
                       {  
                          "nombre":"Cunningham Baxter",
                          "nota":7
                       },
                       {  
                          "nombre":"Ladonna Kirby",
                          "nota":3
                       },
                       {  
                          "nombre":"Hannah Garcia",
                          "nota":2
                       },
                       {  
                          "nombre":"Michelle Fitzgerald",
                          "nota":8
                       },
                       {  
                          "nombre":"Gray Heath",
                          "nota":6
                       },
                       {  
                          "nombre":"Cameron Peterson",
                          "nota":1
                       },
                       {  
                          "nombre":"Phoebe Ross",
                          "nota":5
                       },
                       {  
                          "nombre":"Ann May",
                          "nota":3
                       },
                       {  
                          "nombre":"Sylvia Preston",
                          "nota":3
                       },
                       {  
                          "nombre":"Hopkins Stuart",
                          "nota":9
                       },
                       {  
                          "nombre":"Bruce Witt",
                          "nota":2
                       },
                       {  
                          "nombre":"Mariana Bender",
                          "nota":5
                       }
                    ]
                 },
                 {  
                    "grado":2,
                    "curso":"b",
                    "profesores":2,
                    "profesor":[  
                       {  
                          "nombre":"Dixie Reilly",
                          "suplente":false
                       },
                       {  
                          "nombre":"Latoya Stout",
                          "suplente":true
                       }
                    ],
                    "estudiantes":20,
                    "estudiante":[  
                       {  
                          "nombre":"Solomon Bernard",
                          "nota":0
                       },
                       {  
                          "nombre":"Verna Graves",
                          "nota":2
                       },
                       {  
                          "nombre":"Waller Bruce",
                          "nota":4
                       },
                       {  
                          "nombre":"Vang Zimmerman",
                          "nota":7
                       },
                       {  
                          "nombre":"Cherry Simon",
                          "nota":10
                       },
                       {  
                          "nombre":"Harmon Mccray",
                          "nota":1
                       },
                       {  
                          "nombre":"Goodwin Berger",
                          "nota":2
                       },
                       {  
                          "nombre":"Miranda Mills",
                          "nota":10
                       },
                       {  
                          "nombre":"Stokes Raymond",
                          "nota":3
                       },
                       {  
                          "nombre":"Esmeralda Riddle",
                          "nota":4
                       },
                       {  
                          "nombre":"Dejesus Whitney",
                          "nota":0
                       },
                       {  
                          "nombre":"Jennie Hanson",
                          "nota":2
                       },
                       {  
                          "nombre":"Ginger Shepherd",
                          "nota":2
                       },
                       {  
                          "nombre":"Brandy Booth",
                          "nota":4
                       },
                       {  
                          "nombre":"Weiss Turner",
                          "nota":9
                       },
                       {  
                          "nombre":"Hunt Cantu",
                          "nota":7
                       },
                       {  
                          "nombre":"House Wilder",
                          "nota":2
                       },
                       {  
                          "nombre":"Meagan Ferrell",
                          "nota":1
                       },
                       {  
                          "nombre":"Tanner Ortiz",
                          "nota":4
                       },
                       {  
                          "nombre":"Sanford Wynn",
                          "nota":3
                       }
                    ]
                 },
                 {  
                    "grado":3,
                    "curso":"a",
                    "profesores":2,
                    "profesor":[  
                       {  
                          "nombre":"Lowe Luna",
                          "suplente":false
                       },
                       {  
                          "nombre":"Kerri Rice",
                          "suplente":true
                       }
                    ],
                    "estudiantes":20,
                    "estudiante":[  
                       {  
                          "nombre":"Wanda Villarreal",
                          "nota":3
                       },
                       {  
                          "nombre":"Taylor Mcmillan",
                          "nota":2
                       },
                       {  
                          "nombre":"Suzanne Howe",
                          "nota":0
                       },
                       {  
                          "nombre":"Shelton Trujillo",
                          "nota":9
                       },
                       {  
                          "nombre":"Medina Conrad",
                          "nota":3
                       },
                       {  
                          "nombre":"Marina Caldwell",
                          "nota":5
                       },
                       {  
                          "nombre":"Jolene Pearson",
                          "nota":7
                       },
                       {  
                          "nombre":"Ray Keith",
                          "nota":1
                       },
                       {  
                          "nombre":"Carpenter Mcclure",
                          "nota":4
                       },
                       {  
                          "nombre":"Susana Moore",
                          "nota":3
                       },
                       {  
                          "nombre":"Everett Stevenson",
                          "nota":0
                       },
                       {  
                          "nombre":"Duncan Rollins",
                          "nota":4
                       },
                       {  
                          "nombre":"Glenna Nash",
                          "nota":0
                       },
                       {  
                          "nombre":"Stark Ashley",
                          "nota":0
                       },
                       {  
                          "nombre":"Golden Barnes",
                          "nota":3
                       },
                       {  
                          "nombre":"Christi Prince",
                          "nota":0
                       },
                       {  
                          "nombre":"Howell Middleton",
                          "nota":5
                       },
                       {  
                          "nombre":"Jenny Kirkland",
                          "nota":0
                       },
                       {  
                          "nombre":"Osborn Richard",
                          "nota":2
                       },
                       {  
                          "nombre":"Mona Livingston",
                          "nota":2
                       }
                    ]
                 },
                 {  
                    "grado":3,
                    "curso":"b",
                    "profesores":2,
                    "profesor":[  
                       {  
                          "nombre":"Kerri Rice",
                          "suplente":true
                       },
                       {  
                          "nombre":"Knox Frye",
                          "suplente":false
                       }
                    ],
                    "estudiantes":20,
                    "estudiante":[  
                       {  
                          "nombre":"Liz Bright",
                          "nota":7
                       },
                       {  
                          "nombre":"Ford Wright",
                          "nota":10
                       },
                       {  
                          "nombre":"Cindy Webster",
                          "nota":9
                       },
                       {  
                          "nombre":"Victoria Summers",
                          "nota":9
                       },
                       {  
                          "nombre":"Janet Gibbs",
                          "nota":0
                       },
                       {  
                          "nombre":"Bobbi Mayer",
                          "nota":8
                       },
                       {  
                          "nombre":"Mcdaniel Woodward",
                          "nota":8
                       },
                       {  
                          "nombre":"Vincent Larsen",
                          "nota":1
                       },
                       {  
                          "nombre":"Gaines Mcdonald",
                          "nota":9
                       },
                       {  
                          "nombre":"Arline Hewitt",
                          "nota":6
                       },
                       {  
                          "nombre":"Reeves Eaton",
                          "nota":6
                       },
                       {  
                          "nombre":"Kemp Puckett",
                          "nota":6
                       },
                       {  
                          "nombre":"Rosanna Lara",
                          "nota":5
                       },
                       {  
                          "nombre":"Evangelina Holden",
                          "nota":9
                       },
                       {  
                          "nombre":"Evangeline Hart",
                          "nota":2
                       },
                       {  
                          "nombre":"Santiago Matthews",
                          "nota":0
                       },
                       {  
                          "nombre":"Marjorie Mcguire",
                          "nota":2
                       },
                       {  
                          "nombre":"West Webb",
                          "nota":8
                       },
                       {  
                          "nombre":"Sandy Sargent",
                          "nota":7
                       },
                       {  
                          "nombre":"Nora Moody",
                          "nota":10
                       }
                    ]
                 },
                 {  
                    "grado":4,
                    "curso":"a",
                    "profesores":2,
                    "profesor":[  
                       {  
                          "nombre":"Dena Watts",
                          "suplente":true
                       },
                       {  
                          "nombre":"Gay Hubbard",
                          "suplente":false
                       }
                    ],
                    "estudiantes":20,
                    "estudiante":[  
                       {  
                          "nombre":"Connie Stanton",
                          "nota":4
                       },
                       {  
                          "nombre":"Alyson Barr",
                          "nota":3
                       },
                       {  
                          "nombre":"Velasquez Hopkins",
                          "nota":3
                       },
                       {  
                          "nombre":"Brewer Gonzales",
                          "nota":1
                       },
                       {  
                          "nombre":"Violet Hatfield",
                          "nota":7
                       },
                       {  
                          "nombre":"Marquita Greene",
                          "nota":1
                       },
                       {  
                          "nombre":"White Merritt",
                          "nota":5
                       },
                       {  
                          "nombre":"Rhoda Nolan",
                          "nota":4
                       },
                       {  
                          "nombre":"Mcdonald Warren",
                          "nota":4
                       },
                       {  
                          "nombre":"Conway Doyle",
                          "nota":2
                       },
                       {  
                          "nombre":"Harper Rosario",
                          "nota":1
                       },
                       {  
                          "nombre":"Marcella Castaneda",
                          "nota":9
                       },
                       {  
                          "nombre":"Christa Mcmahon",
                          "nota":2
                       },
                       {  
                          "nombre":"Luna Faulkner",
                          "nota":0
                       },
                       {  
                          "nombre":"Barnett Todd",
                          "nota":2
                       },
                       {  
                          "nombre":"Conrad Malone",
                          "nota":9
                       },
                       {  
                          "nombre":"Deleon Mejia",
                          "nota":10
                       },
                       {  
                          "nombre":"Snyder Mckay",
                          "nota":1
                       },
                       {  
                          "nombre":"Morrison Brown",
                          "nota":0
                       },
                       {  
                          "nombre":"Stevenson Huff",
                          "nota":0
                       }
                    ]
                 },
                 {  
                    "grado":4,
                    "curso":"b",
                    "profesores":2,
                    "profesor":[  
                       {  
                          "nombre":"Dena Watts",
                          "suplente":true
                       },
                       {  
                          "nombre":"Dunlap Michael",
                          "suplente":false
                       }
                    ],
                    "estudiantes":20,
                    "estudiante":[  
                       {  
                          "nombre":"Sutton Lyons",
                          "nota":7
                       },
                       {  
                          "nombre":"Goodman Leonard",
                          "nota":7
                       },
                       {  
                          "nombre":"Michael Franklin",
                          "nota":10
                       },
                       {  
                          "nombre":"Carolina Jenkins",
                          "nota":4
                       },
                       {  
                          "nombre":"Mercado Riggs",
                          "nota":1
                       },
                       {  
                          "nombre":"Teresa Rocha",
                          "nota":2
                       },
                       {  
                          "nombre":"Jeanette Chapman",
                          "nota":3
                       },
                       {  
                          "nombre":"Sharon Cortez",
                          "nota":5
                       },
                       {  
                          "nombre":"Teri Avila",
                          "nota":3
                       },
                       {  
                          "nombre":"Wiley Brewer",
                          "nota":7
                       },
                       {  
                          "nombre":"Head Jacobson",
                          "nota":4
                       },
                       {  
                          "nombre":"Huber Schroeder",
                          "nota":2
                       },
                       {  
                          "nombre":"Meyer Fields",
                          "nota":8
                       },
                       {  
                          "nombre":"Bowers Brock",
                          "nota":7
                       },
                       {  
                          "nombre":"Lela Terry",
                          "nota":6
                       },
                       {  
                          "nombre":"Vicky Norton",
                          "nota":1
                       },
                       {  
                          "nombre":"Parker Mccullough",
                          "nota":10
                       },
                       {  
                          "nombre":"Simon Mckinney",
                          "nota":3
                       },
                       {  
                          "nombre":"Jeannette Nunez",
                          "nota":3
                       },
                       {  
                          "nombre":"Sonja Grimes",
                          "nota":7
                       }
                    ]
                 },
                 {  
                    "grado":5,
                    "curso":"a",
                    "profesores":2,
                    "profesor":[  
                       {  
                          "nombre":"Gayle Franks",
                          "suplente":true
                       },
                       {  
                          "nombre":"Paul Morrow",
                          "suplente":false
                       }
                    ],
                    "estudiantes":20,
                    "estudiante":[  
                       {  
                          "nombre":"Gilbert Morin",
                          "nota":0
                       },
                       {  
                          "nombre":"Harvey Riley",
                          "nota":6
                       },
                       {  
                          "nombre":"Livingston Bush",
                          "nota":3
                       },
                       {  
                          "nombre":"Jacobs Humphrey",
                          "nota":9
                       },
                       {  
                          "nombre":"Rosie Evans",
                          "nota":4
                       },
                       {  
                          "nombre":"Stuart Watson",
                          "nota":0
                       },
                       {  
                          "nombre":"Jasmine Jones",
                          "nota":4
                       },
                       {  
                          "nombre":"Montgomery Obrien",
                          "nota":6
                       },
                       {  
                          "nombre":"Josie Davis",
                          "nota":3
                       },
                       {  
                          "nombre":"Billie Cotton",
                          "nota":9
                       },
                       {  
                          "nombre":"Camacho Roberts",
                          "nota":4
                       },
                       {  
                          "nombre":"Lourdes Barnett",
                          "nota":9
                       },
                       {  
                          "nombre":"Scott Sykes",
                          "nota":10
                       },
                       {  
                          "nombre":"Dionne Blackwell",
                          "nota":7
                       },
                       {  
                          "nombre":"Twila Austin",
                          "nota":10
                       },
                       {  
                          "nombre":"Velez Ayala",
                          "nota":1
                       },
                       {  
                          "nombre":"Eunice Henderson",
                          "nota":10
                       },
                       {  
                          "nombre":"Conley Boyd",
                          "nota":10
                       },
                       {  
                          "nombre":"Snider Moreno",
                          "nota":10
                       },
                       {  
                          "nombre":"Alisa Haynes",
                          "nota":10
                       }
                    ]
                 },
                 {  
                    "grado":5,
                    "curso":"b",
                    "profesores":2,
                    "profesor":[  
                       {  
                          "nombre":"Carlene Copeland",
                          "suplente":false
                       },
                       {  
                          "nombre":"Gayle Franks",
                          "suplente":true
                       }
                    ],
                    "estudiantes":20,
                    "estudiante":[  
                       {  
                          "nombre":"Imelda Robertson",
                          "nota":0
                       },
                       {  
                          "nombre":"Deborah Duffy",
                          "nota":0
                       },
                       {  
                          "nombre":"Tillman Wooten",
                          "nota":10
                       },
                       {  
                          "nombre":"Santos Gay",
                          "nota":3
                       },
                       {  
                          "nombre":"Lisa Marsh",
                          "nota":8
                       },
                       {  
                          "nombre":"Donovan Hardy",
                          "nota":4
                       },
                       {  
                          "nombre":"Estelle Lester",
                          "nota":1
                       },
                       {  
                          "nombre":"Ward Mckenzie",
                          "nota":3
                       },
                       {  
                          "nombre":"Melba Gaines",
                          "nota":0
                       },
                       {  
                          "nombre":"Kris Kinney",
                          "nota":9
                       },
                       {  
                          "nombre":"Sherman Stephens",
                          "nota":2
                       },
                       {  
                          "nombre":"Dawn Lowery",
                          "nota":9
                       },
                       {  
                          "nombre":"Jessie Wheeler",
                          "nota":6
                       },
                       {  
                          "nombre":"Frye Pope",
                          "nota":10
                       },
                       {  
                          "nombre":"Webster Coffey",
                          "nota":5
                       },
                       {  
                          "nombre":"Luz Lewis",
                          "nota":9
                       },
                       {  
                          "nombre":"Bethany Cooley",
                          "nota":2
                       },
                       {  
                          "nombre":"Marcie Maxwell",
                          "nota":1
                       },
                       {  
                          "nombre":"Mcmillan Fisher",
                          "nota":1
                       },
                       {  
                          "nombre":"Jeanine Walters",
                          "nota":5
                       }
                    ]
                 }
              ]
           }
        ],
        "bachillerato" : [
            {
                "estudiantes":348,
                "profesores":24,
                "grados":6,
                "cursos":12,
                "curso": [
                    {
                        "grado": 6,
                        "curso": "a",
                        "profesores": 4,
                        "profesor": [
                          {
                            "nombre": "Georgia Little"
                          },
                          {
                            "nombre": "Albert Durham"
                          },
                          {
                            "nombre": "Sue Weber"
                          },
                          {
                            "nombre": "Marisol Booth"
                          }
                        ],
                        "estudiantes": 29,
                        "estudiante": [
                          {
                            "nombre": "Roberta Boyd",
                            "nota": 1
                          },
                          {
                            "nombre": "Jacobs Buckner",
                            "nota": 3
                          },
                          {
                            "nombre": "James Raymond",
                            "nota": 8
                          },
                          {
                            "nombre": "Amy Hopper",
                            "nota": 6
                          },
                          {
                            "nombre": "Reid Austin",
                            "nota": 9
                          },
                          {
                            "nombre": "Mckee Hatfield",
                            "nota": 8
                          },
                          {
                            "nombre": "Arnold Dorsey",
                            "nota": 7
                          },
                          {
                            "nombre": "Kelli Huffman",
                            "nota": 0
                          },
                          {
                            "nombre": "Delaney Warner",
                            "nota": 1
                          },
                          {
                            "nombre": "England Pollard",
                            "nota": 5
                          },
                          {
                            "nombre": "Carroll Wilcox",
                            "nota": 10
                          },
                          {
                            "nombre": "Jensen Carr",
                            "nota": 4
                          },
                          {
                            "nombre": "Aurora Holman",
                            "nota": 1
                          },
                          {
                            "nombre": "Ann Bryan",
                            "nota": 5
                          },
                          {
                            "nombre": "Lila Carver",
                            "nota": 0
                          },
                          {
                            "nombre": "Corine Craig",
                            "nota": 2
                          },
                          {
                            "nombre": "Jenna Graham",
                            "nota": 8
                          },
                          {
                            "nombre": "Selma Logan",
                            "nota": 8
                          },
                          {
                            "nombre": "April Travis",
                            "nota": 8
                          },
                          {
                            "nombre": "Darcy Barton",
                            "nota": 0
                          }
                        ]
                      },
                      {
                        "grado": 6,
                        "curso": "b",
                        "profesores": 4,
                        "profesor": [
                          {
                            "nombre": "Adams Decker"
                          },
                          {
                            "nombre": "Cameron Stein"
                          },
                          {
                            "nombre": "Brigitte Cooke"
                          },
                          {
                            "nombre": "Meghan Maldonado"
                          }
                        ],
                        "estudiantes": 29,
                        "estudiante": [
                          {
                            "nombre": "Garner Mcdaniel",
                            "nota": 9
                          },
                          {
                            "nombre": "Marks Ayala",
                            "nota": 9
                          },
                          {
                            "nombre": "Mcdowell Franco",
                            "nota": 1
                          },
                          {
                            "nombre": "Johnnie Lindsey",
                            "nota": 10
                          },
                          {
                            "nombre": "Deleon Lopez",
                            "nota": 10
                          },
                          {
                            "nombre": "Bonner Guy",
                            "nota": 1
                          },
                          {
                            "nombre": "Rasmussen Castro",
                            "nota": 0
                          },
                          {
                            "nombre": "Bertha Stafford",
                            "nota": 6
                          },
                          {
                            "nombre": "Wright Singleton",
                            "nota": 9
                          },
                          {
                            "nombre": "Fuentes Suarez",
                            "nota": 3
                          },
                          {
                            "nombre": "Laurel Christian",
                            "nota": 7
                          },
                          {
                            "nombre": "Huber Manning",
                            "nota": 0
                          },
                          {
                            "nombre": "Riggs Burns",
                            "nota": 10
                          },
                          {
                            "nombre": "Tillman Fisher",
                            "nota": 10
                          },
                          {
                            "nombre": "Patterson Cohen",
                            "nota": 0
                          },
                          {
                            "nombre": "Wong Flowers",
                            "nota": 0
                          },
                          {
                            "nombre": "Hill Richmond",
                            "nota": 6
                          },
                          {
                            "nombre": "Dotson Fischer",
                            "nota": 6
                          },
                          {
                            "nombre": "Reeves Thornton",
                            "nota": 10
                          },
                          {
                            "nombre": "Edna Hebert",
                            "nota": 5
                          }
                        ]
                      },
                      {
                        "grado": 7,
                        "curso": "a",
                        "profesores": 4,
                        "profesor": [
                          {
                            "nombre": "Collier Joseph"
                          },
                          {
                            "nombre": "Sabrina Lee"
                          },
                          {
                            "nombre": "Susan Simon"
                          },
                          {
                            "nombre": "Hayes Clay"
                          }
                        ],
                        "estudiantes": 29,
                        "estudiante": [
                          {
                            "nombre": "Amalia Wynn",
                            "nota": 10
                          },
                          {
                            "nombre": "Marguerite Kemp",
                            "nota": 4
                          },
                          {
                            "nombre": "Acevedo Byers",
                            "nota": 0
                          },
                          {
                            "nombre": "Good Copeland",
                            "nota": 0
                          },
                          {
                            "nombre": "Marlene Frederick",
                            "nota": 0
                          },
                          {
                            "nombre": "Glenna Roman",
                            "nota": 2
                          },
                          {
                            "nombre": "Woods Flynn",
                            "nota": 10
                          },
                          {
                            "nombre": "Angel Warren",
                            "nota": 2
                          },
                          {
                            "nombre": "Clemons Rivera",
                            "nota": 4
                          },
                          {
                            "nombre": "Cleveland Vance",
                            "nota": 5
                          },
                          {
                            "nombre": "Pearl Greer",
                            "nota": 7
                          },
                          {
                            "nombre": "May Walker",
                            "nota": 1
                          },
                          {
                            "nombre": "Little Rivers",
                            "nota": 6
                          },
                          {
                            "nombre": "Rae Cunningham",
                            "nota": 7
                          },
                          {
                            "nombre": "Foster Christensen",
                            "nota": 5
                          },
                          {
                            "nombre": "Pamela Wilkerson",
                            "nota": 1
                          },
                          {
                            "nombre": "Garrett Strong",
                            "nota": 6
                          },
                          {
                            "nombre": "Schroeder Dunn",
                            "nota": 2
                          },
                          {
                            "nombre": "Josephine Sellers",
                            "nota": 2
                          },
                          {
                            "nombre": "Klein Hester",
                            "nota": 8
                          }
                        ]
                      },
                      {
                        "grado": 7,
                        "curso": "b",
                        "profesores": 4,
                        "profesor": [
                          {
                            "nombre": "Margie Douglas"
                          },
                          {
                            "nombre": "Elliott Trevino"
                          },
                          {
                            "nombre": "Lillian Mercado"
                          },
                          {
                            "nombre": "Sheila Yang"
                          }
                        ],
                        "estudiantes": 29,
                        "estudiante": [
                          {
                            "nombre": "Leticia Valenzuela",
                            "nota": 0
                          },
                          {
                            "nombre": "Mcneil Drake",
                            "nota": 3
                          },
                          {
                            "nombre": "Burch Leonard",
                            "nota": 6
                          },
                          {
                            "nombre": "Rosemarie Ashley",
                            "nota": 2
                          },
                          {
                            "nombre": "Blanche Lowery",
                            "nota": 2
                          },
                          {
                            "nombre": "Trisha Stone",
                            "nota": 6
                          },
                          {
                            "nombre": "Brianna Payne",
                            "nota": 4
                          },
                          {
                            "nombre": "Boyd Crawford",
                            "nota": 4
                          },
                          {
                            "nombre": "Charity Guerrero",
                            "nota": 1
                          },
                          {
                            "nombre": "Booth Robles",
                            "nota": 2
                          },
                          {
                            "nombre": "Gomez Bernard",
                            "nota": 7
                          },
                          {
                            "nombre": "Mcdonald Espinoza",
                            "nota": 10
                          },
                          {
                            "nombre": "Deloris Spencer",
                            "nota": 6
                          },
                          {
                            "nombre": "Julianne Golden",
                            "nota": 1
                          },
                          {
                            "nombre": "Alfreda Butler",
                            "nota": 0
                          },
                          {
                            "nombre": "Chasity Cortez",
                            "nota": 0
                          },
                          {
                            "nombre": "Tommie Morales",
                            "nota": 1
                          },
                          {
                            "nombre": "Sallie Sharpe",
                            "nota": 9
                          },
                          {
                            "nombre": "Harris Calhoun",
                            "nota": 10
                          },
                          {
                            "nombre": "Ofelia Gaines",
                            "nota": 8
                          }
                        ]
                      },
                      {
                        "grado": 8,
                        "curso": "a",
                        "profesores": 4,
                        "profesor": [
                          {
                            "nombre": "Ayala Sharp"
                          },
                          {
                            "nombre": "Powers Luna"
                          },
                          {
                            "nombre": "Marion Juarez"
                          },
                          {
                            "nombre": "Mai Valentine"
                          }
                        ],
                        "estudiantes": 29,
                        "estudiante": [
                          {
                            "nombre": "Sandy Woodward",
                            "nota": 10
                          },
                          {
                            "nombre": "Millicent Hinton",
                            "nota": 1
                          },
                          {
                            "nombre": "Henry Bruce",
                            "nota": 4
                          },
                          {
                            "nombre": "Raymond Walsh",
                            "nota": 2
                          },
                          {
                            "nombre": "Lester Wolfe",
                            "nota": 6
                          },
                          {
                            "nombre": "Becker Hale",
                            "nota": 6
                          },
                          {
                            "nombre": "Estrada Mcclain",
                            "nota": 5
                          },
                          {
                            "nombre": "Blevins Clayton",
                            "nota": 0
                          },
                          {
                            "nombre": "Franklin Branch",
                            "nota": 2
                          },
                          {
                            "nombre": "Brady Graves",
                            "nota": 4
                          },
                          {
                            "nombre": "Reese Kline",
                            "nota": 2
                          },
                          {
                            "nombre": "Lori Leon",
                            "nota": 0
                          },
                          {
                            "nombre": "Jacqueline Armstrong",
                            "nota": 0
                          },
                          {
                            "nombre": "Vance Farmer",
                            "nota": 5
                          },
                          {
                            "nombre": "Jane Harrington",
                            "nota": 0
                          },
                          {
                            "nombre": "Burks Preston",
                            "nota": 4
                          },
                          {
                            "nombre": "Terra Mcfadden",
                            "nota": 10
                          },
                          {
                            "nombre": "Daniel Kramer",
                            "nota": 10
                          },
                          {
                            "nombre": "Avis Hyde",
                            "nota": 2
                          },
                          {
                            "nombre": "Lottie Morse",
                            "nota": 6
                          }
                        ]
                      },
                      {
                        "grado": 8,
                        "curso": "b",
                        "profesores": 4,
                        "profesor": [
                          {
                            "nombre": "Staci Cooley"
                          },
                          {
                            "nombre": "Wilcox Langley"
                          },
                          {
                            "nombre": "Deanne Hampton"
                          },
                          {
                            "nombre": "Buchanan Russell"
                          }
                        ],
                        "estudiantes": 29,
                        "estudiante": [
                          {
                            "nombre": "Frederick Underwood",
                            "nota": 6
                          },
                          {
                            "nombre": "Cervantes Blevins",
                            "nota": 10
                          },
                          {
                            "nombre": "Louella Barrera",
                            "nota": 3
                          },
                          {
                            "nombre": "Roy Love",
                            "nota": 10
                          },
                          {
                            "nombre": "Love Phelps",
                            "nota": 0
                          },
                          {
                            "nombre": "Shawna Chen",
                            "nota": 7
                          },
                          {
                            "nombre": "Johnson Rocha",
                            "nota": 8
                          },
                          {
                            "nombre": "Stacie Craft",
                            "nota": 6
                          },
                          {
                            "nombre": "Madden Hodges",
                            "nota": 9
                          },
                          {
                            "nombre": "Dalton Morin",
                            "nota": 1
                          },
                          {
                            "nombre": "Vanessa Sargent",
                            "nota": 8
                          },
                          {
                            "nombre": "Cole Brooks",
                            "nota": 9
                          },
                          {
                            "nombre": "Audrey Levine",
                            "nota": 5
                          },
                          {
                            "nombre": "Ginger Sears",
                            "nota": 3
                          },
                          {
                            "nombre": "Mayo Stephens",
                            "nota": 6
                          },
                          {
                            "nombre": "Frye Buchanan",
                            "nota": 9
                          },
                          {
                            "nombre": "Sawyer Gates",
                            "nota": 8
                          },
                          {
                            "nombre": "Morin Chase",
                            "nota": 1
                          },
                          {
                            "nombre": "Walls Tyson",
                            "nota": 4
                          },
                          {
                            "nombre": "Russo Saunders",
                            "nota": 4
                          }
                        ]
                      },
                      {
                        "grado": 9,
                        "curso": "a",
                        "profesores": 4,
                        "profesor": [
                          {
                            "nombre": "Suzette Levy"
                          },
                          {
                            "nombre": "Knight Fernandez"
                          },
                          {
                            "nombre": "Combs May"
                          },
                          {
                            "nombre": "Curry Avila"
                          }
                        ],
                        "estudiantes": 29,
                        "estudiante": [
                          {
                            "nombre": "Jennings Charles",
                            "nota": 9
                          },
                          {
                            "nombre": "Mercer Wade",
                            "nota": 10
                          },
                          {
                            "nombre": "Jan Dyer",
                            "nota": 5
                          },
                          {
                            "nombre": "Beulah Byrd",
                            "nota": 5
                          },
                          {
                            "nombre": "Ola Stephenson",
                            "nota": 8
                          },
                          {
                            "nombre": "Walsh Whitaker",
                            "nota": 5
                          },
                          {
                            "nombre": "Alma Ramsey",
                            "nota": 10
                          },
                          {
                            "nombre": "Tammie Mclaughlin",
                            "nota": 2
                          },
                          {
                            "nombre": "Janie Arnold",
                            "nota": 10
                          },
                          {
                            "nombre": "Berger Lloyd",
                            "nota": 0
                          },
                          {
                            "nombre": "Bullock Bryant",
                            "nota": 8
                          },
                          {
                            "nombre": "Zelma Holt",
                            "nota": 2
                          },
                          {
                            "nombre": "Gallagher Ray",
                            "nota": 8
                          },
                          {
                            "nombre": "Nora Bates",
                            "nota": 6
                          },
                          {
                            "nombre": "Olivia Cantrell",
                            "nota": 10
                          },
                          {
                            "nombre": "Lacey Guthrie",
                            "nota": 0
                          },
                          {
                            "nombre": "Ross Walter",
                            "nota": 2
                          },
                          {
                            "nombre": "Ernestine Gamble",
                            "nota": 0
                          },
                          {
                            "nombre": "Suarez Knapp",
                            "nota": 2
                          },
                          {
                            "nombre": "Cristina Crosby",
                            "nota": 3
                          }
                        ]
                      },
                      {
                        "grado": 9,
                        "curso": "b",
                        "profesores": 4,
                        "profesor": [
                          {
                            "nombre": "Inez Goff"
                          },
                          {
                            "nombre": "Floyd Garrett"
                          },
                          {
                            "nombre": "Lorene Beach"
                          },
                          {
                            "nombre": "Shields Wells"
                          }
                        ],
                        "estudiantes": 29,
                        "estudiante": [
                          {
                            "nombre": "Latisha Moon",
                            "nota": 7
                          },
                          {
                            "nombre": "Lolita Oconnor",
                            "nota": 4
                          },
                          {
                            "nombre": "Neal Weiss",
                            "nota": 10
                          },
                          {
                            "nombre": "Rowe Lyons",
                            "nota": 0
                          },
                          {
                            "nombre": "Robbins Mccarthy",
                            "nota": 5
                          },
                          {
                            "nombre": "Claire Salazar",
                            "nota": 8
                          },
                          {
                            "nombre": "Eddie Sullivan",
                            "nota": 5
                          },
                          {
                            "nombre": "Leblanc Mcmahon",
                            "nota": 9
                          },
                          {
                            "nombre": "Townsend Morgan",
                            "nota": 7
                          },
                          {
                            "nombre": "Avery Daniel",
                            "nota": 5
                          },
                          {
                            "nombre": "Beverly Wagner",
                            "nota": 0
                          },
                          {
                            "nombre": "Dodson Medina",
                            "nota": 2
                          },
                          {
                            "nombre": "Abigail Leblanc",
                            "nota": 7
                          },
                          {
                            "nombre": "Perez Campbell",
                            "nota": 3
                          },
                          {
                            "nombre": "Ramsey Madden",
                            "nota": 3
                          },
                          {
                            "nombre": "Stella Peters",
                            "nota": 8
                          },
                          {
                            "nombre": "Morrow Carson",
                            "nota": 2
                          },
                          {
                            "nombre": "Pauline Perez",
                            "nota": 9
                          },
                          {
                            "nombre": "Davis Pratt",
                            "nota": 7
                          },
                          {
                            "nombre": "Kristine Howell",
                            "nota": 8
                          }
                        ]
                      },
                      {
                        "grado": 10,
                        "curso": "a",
                        "profesores": 4,
                        "profesor": [
                          {
                            "nombre": "Warren Olson"
                          },
                          {
                            "nombre": "Henson Rose"
                          },
                          {
                            "nombre": "Lucas Reeves"
                          },
                          {
                            "nombre": "Fran Mathis"
                          }
                        ],
                        "estudiantes": 29,
                        "estudiante": [
                          {
                            "nombre": "Clarke Farley",
                            "nota": 6
                          },
                          {
                            "nombre": "Georgina Haley",
                            "nota": 4
                          },
                          {
                            "nombre": "Tamra Richard",
                            "nota": 1
                          },
                          {
                            "nombre": "Alisha Salinas",
                            "nota": 4
                          },
                          {
                            "nombre": "Josie Ramirez",
                            "nota": 6
                          },
                          {
                            "nombre": "Baxter Mendez",
                            "nota": 0
                          },
                          {
                            "nombre": "Eve Newman",
                            "nota": 8
                          },
                          {
                            "nombre": "Bishop Rush",
                            "nota": 8
                          },
                          {
                            "nombre": "Gilliam Jones",
                            "nota": 8
                          },
                          {
                            "nombre": "Lauren Williams",
                            "nota": 7
                          },
                          {
                            "nombre": "Ballard Kennedy",
                            "nota": 5
                          },
                          {
                            "nombre": "Macias Haynes",
                            "nota": 10
                          },
                          {
                            "nombre": "Rosetta Forbes",
                            "nota": 5
                          },
                          {
                            "nombre": "Twila Sanders",
                            "nota": 2
                          },
                          {
                            "nombre": "Catherine Hays",
                            "nota": 6
                          },
                          {
                            "nombre": "Sherrie Spears",
                            "nota": 0
                          },
                          {
                            "nombre": "Booker Rivas",
                            "nota": 9
                          },
                          {
                            "nombre": "Mariana Ortiz",
                            "nota": 7
                          },
                          {
                            "nombre": "Webster Glover",
                            "nota": 7
                          },
                          {
                            "nombre": "Kimberley Dudley",
                            "nota": 0
                          }
                        ]
                      },
                      {
                        "grado": 10,
                        "curso": "b",
                        "profesores": 4,
                        "profesor": [
                          {
                            "nombre": "Kristin Cherry"
                          },
                          {
                            "nombre": "Barker Garza"
                          },
                          {
                            "nombre": "Welch Key"
                          },
                          {
                            "nombre": "Peterson Holloway"
                          }
                        ],
                        "estudiantes": 29,
                        "estudiante": [
                          {
                            "nombre": "Castaneda French",
                            "nota": 10
                          },
                          {
                            "nombre": "Vasquez Hodge",
                            "nota": 4
                          },
                          {
                            "nombre": "Austin Rasmussen",
                            "nota": 7
                          },
                          {
                            "nombre": "Long Rich",
                            "nota": 2
                          },
                          {
                            "nombre": "Bobbie Harding",
                            "nota": 4
                          },
                          {
                            "nombre": "Lyons Greene",
                            "nota": 4
                          },
                          {
                            "nombre": "Faye Knox",
                            "nota": 10
                          },
                          {
                            "nombre": "Hoffman Mccullough",
                            "nota": 6
                          },
                          {
                            "nombre": "Pena Park",
                            "nota": 8
                          },
                          {
                            "nombre": "Butler Marsh",
                            "nota": 1
                          },
                          {
                            "nombre": "Mona Robinson",
                            "nota": 0
                          },
                          {
                            "nombre": "Wilda Davis",
                            "nota": 4
                          },
                          {
                            "nombre": "Dickson Dillard",
                            "nota": 6
                          },
                          {
                            "nombre": "Joyce Dunlap",
                            "nota": 6
                          },
                          {
                            "nombre": "Celina Callahan",
                            "nota": 0
                          },
                          {
                            "nombre": "Janna Pacheco",
                            "nota": 3
                          },
                          {
                            "nombre": "Kirkland Mueller",
                            "nota": 9
                          },
                          {
                            "nombre": "Carla Nielsen",
                            "nota": 6
                          },
                          {
                            "nombre": "Pam Hubbard",
                            "nota": 7
                          },
                          {
                            "nombre": "Carlson Adkins",
                            "nota": 5
                          }
                        ]
                      },
                      {
                        "grado": 11,
                        "curso": "a",
                        "profesores": 4,
                        "profesor": [
                          {
                            "nombre": "Moon Stokes"
                          },
                          {
                            "nombre": "Wilma Mcintyre"
                          },
                          {
                            "nombre": "Bobbi Morton"
                          },
                          {
                            "nombre": "Giles Sloan"
                          }
                        ],
                        "estudiantes": 29,
                        "estudiante": [
                          {
                            "nombre": "Dena Shaffer",
                            "nota": 9
                          },
                          {
                            "nombre": "Bernard Mullen",
                            "nota": 9
                          },
                          {
                            "nombre": "Lucinda Mcknight",
                            "nota": 8
                          },
                          {
                            "nombre": "Frieda Joyce",
                            "nota": 10
                          },
                          {
                            "nombre": "Helen Clemons",
                            "nota": 2
                          },
                          {
                            "nombre": "Violet Alston",
                            "nota": 3
                          },
                          {
                            "nombre": "Kathleen Wright",
                            "nota": 7
                          },
                          {
                            "nombre": "Lambert Mejia",
                            "nota": 7
                          },
                          {
                            "nombre": "Maryanne Ryan",
                            "nota": 9
                          },
                          {
                            "nombre": "Holden Perkins",
                            "nota": 10
                          },
                          {
                            "nombre": "Emerson Miller",
                            "nota": 4
                          },
                          {
                            "nombre": "Adele Shannon",
                            "nota": 4
                          },
                          {
                            "nombre": "Bolton Boyer",
                            "nota": 5
                          },
                          {
                            "nombre": "Gilbert Brown",
                            "nota": 8
                          },
                          {
                            "nombre": "Mays Henderson",
                            "nota": 1
                          },
                          {
                            "nombre": "Daisy Pierce",
                            "nota": 2
                          },
                          {
                            "nombre": "Hallie Brewer",
                            "nota": 1
                          },
                          {
                            "nombre": "Chris Rogers",
                            "nota": 10
                          },
                          {
                            "nombre": "Summers Casey",
                            "nota": 7
                          },
                          {
                            "nombre": "Hall Lynn",
                            "nota": 5
                          }
                        ]
                      },
                      {
                        "grado": 11,
                        "curso": "b",
                        "profesores": 4,
                        "profesor": [
                          {
                            "nombre": "Christensen Garcia"
                          },
                          {
                            "nombre": "Calderon Madden"
                          },
                          {
                            "nombre": "Knox Vasquez"
                          },
                          {
                            "nombre": "Carver Delgado"
                          }
                        ],
                        "estudiantes": 29,
                        "estudiante": [
                          {
                            "nombre": "Sargent Martin",
                            "nota": 1
                          },
                          {
                            "nombre": "Hobbs Flores",
                            "nota": 3
                          },
                          {
                            "nombre": "Garner Knox",
                            "nota": 9
                          },
                          {
                            "nombre": "Galloway Lawrence",
                            "nota": 2
                          },
                          {
                            "nombre": "Ruiz Mason",
                            "nota": 9
                          },
                          {
                            "nombre": "Sherry Harding",
                            "nota": 6
                          },
                          {
                            "nombre": "Velazquez Dyer",
                            "nota": 9
                          },
                          {
                            "nombre": "Sue Huff",
                            "nota": 3
                          },
                          {
                            "nombre": "Blanca Carpenter",
                            "nota": 8
                          },
                          {
                            "nombre": "Judy Holland",
                            "nota": 8
                          },
                          {
                            "nombre": "Howe Hoffman",
                            "nota": 8
                          },
                          {
                            "nombre": "Jo Grimes",
                            "nota": 1
                          },
                          {
                            "nombre": "Frazier James",
                            "nota": 2
                          },
                          {
                            "nombre": "Dorsey Mcclure",
                            "nota": 8
                          },
                          {
                            "nombre": "Barlow Dean",
                            "nota": 4
                          },
                          {
                            "nombre": "Sandy White",
                            "nota": 10
                          },
                          {
                            "nombre": "Kristina Brennan",
                            "nota": 8
                          },
                          {
                            "nombre": "Travis Buck",
                            "nota": 1
                          },
                          {
                            "nombre": "Maria Norton",
                            "nota": 10
                          },
                          {
                            "nombre": "Burton Shaffer",
                            "nota": 4
                          }
                        ]
                      }
                ]
            }
        ]
         }

    $scope.EstudiantesMejorProPrimaria = function(){
        var CursoPrimaria = data.primaria[0].curso;
        var NotaMaxima = 0;
        var estudiante ={};
        for(var indice =0; indice <CursoPrimaria.length;indice++){
            for(var indiceEstudiante =0;indiceEstudiante <CursoPrimaria[indice].estudiante.length;indiceEstudiante++){
            if (CursoPrimaria[indice].estudiante[indiceEstudiante].nota> NotaMaxima) {
                NotaMaxima = CursoPrimaria[indice].estudiante[indiceEstudiante].nota;
                estudiante = CursoPrimaria[indice].estudiante[indiceEstudiante];
            }
        }
    }
        $scope.estudianteMejorNota = estudiante;
    }

    $scope.salonesdeclases =function(){
      data.primaria[0].curso[2].profesor[0].nombre;

    }
  
  })

  

