type NewsItem = {
    title: string;
    date: string;
    images: string[];
    description: string[];
    contact: {
        description: string;
        email: string;
    };
};

export const newsContent: NewsItem[] = [
    {
        title: 'SEKU Health Week 2025',
        date: '1th April 2025',
        images: ['/images/events/health-week.png'],
        description: [
            'The University Management Board led by the Vice- Chancellor Prof. Eng. Douglas Shitanda officially launched the University Health Week organized by HIV AND AIDS CONTROL UNIT (HACU).',
            'In his speech, the Vice- Chancellor urged students and member of staff to come for testing and screening and above all to abstain from sex in order to avoid HIV/AIDDS infections because right the country has a challenge of getting HIV/AIDS drugs.',
            'Several activities took place, among them was sensitization and testing of HIV/AIDS, condom demonstration and distribution, cervical cancer and breast cancer screening, Blood Pressure monitoring, Random blood sugar testing, Body Mass Index-BMI and Weight measuring.',
            'This services were done by SEKU medical team in collaboration with a team of medical professionals and Community Health Promoters (CHPs), from the Ministry of Health-Kitui County.export const newsHeaders = [',
        ],
        contact: {
            description: '',
            email: '',
        },
    },
    {
        title: 'IEEE Distinguished Lecture on Antennas, Propagation & Aerospace Systems Held At SEKU',
        date: '13th March 2025',
        images: ['/images/events/ieee-seku.png'],
        description: [
            'The IEEE SEKU Student Branch successfully hosted a distinguished lecture featuring Prof. Reyhan Baktur (Utah State University, USA) and Prof. Warren De Plesis (University of Pretoria, South Africa). The session focused on advancements in Antennas, Propagation, and Aerospace Systems, offering participants a deeper understanding of emerging technologies in the field.',
            'Received by Prof. Kioli who was acting for the Vice-Chancellor and Prof. Catherine Mwenda acting DVC-Academics Research and Innovation the guests promised to help SEKU students grow in research and innovation.',
            'This event was made possible through the support of Eng. Benson Ojwang, Chair, Department of Electrical & Electronics Engineering, and IEEE SEKU Student Branch Counselor. His leadership was instrumental in organizing the session. We also recognize the contributions of Dr. Peter Moses Musau, Dean, School of Engineering & Technology, and Wycliffe Omolo, IEEE APS Society Counselor, for their guidance.',
            'Special appreciation goes to Morgan Githiri Waweru, Chair of IEEE SEKU, for spearheading the initiative. The engagement of IEEE members, including participants from the IEEE TUK Student Branch, enriched the discussions and made the event a success.',
            'SEKU remains committed to fostering innovation, knowledge sharing, and professional growth through such collaborative engagements.',
        ],
        contact: {
            description: 'For more information, please contact the SEKU Communication Office: strategic communication and public relations officer – Lilian Okwili Tel: +254 724 101 263',
            email: 'lokwili@seku.ac.ke',
        },
    },
    {
        title: 'Labaratory Medicine',
        date: '19th March 2025',
        images: ['/images/events/lab-med.png'],
        description: [
            'The South Eastern Kenya University Medical Laboratory Students Association (SEKUMLSA) recently participated in the Kenya Medical Laboratory Sciences Students Association (KEMELSA) professional exchange program at Jomo Kenyatta University of Agriculture and Technology (JKUAT) on March.',
            'SEKUMLSA President, Alex Matasian Lekipailoi, represented the association and the university at the event, which aimed to enhance the academic, practical, and career development of participants in the field of laboratory medicine.',
            'The program featured discussions on emerging trends, best practices, and the latest technological advancements in laboratory medicine. Students gained a deeper understanding of the challenges and opportunities they will encounter in their careers.',
            'A presentation by Ms. Monica Githae, Quality Assurance Manager at Kenyatta University Teaching, Referral, and Research Hospital, emphasized the importance of accreditation, quality assurance, and regulatory compliance in laboratory practices.',
            'Dr. Amos Mbugua, Chair of the Department of Medical Laboratory Sciences at JKUAT, inspired students to pursue meaningful research and collaboration.',
            'SEKUMLSA President Alex Matasian emphasized the importance of networking and collaboration in the field of medical laboratory sciences.',
            '"Laboratories are the cornerstone of diagnosis... To ensure quality outcomes, every individual must take personal responsibility for adhering to compliance standards." - Ms. Monica Githae',
            '"As future medical laboratory professionals, it is crucial that we build strong relationships with our peers and mentors..This will enable us to stay updated on the latest advancements in our field and provide betterment services to our patients " - Alex Matasian, SEKUMLSA President',
            'The KEMELSA professional exchange program provided a valuable platform for SEKUMLSA students to engage with their peers, learn from experts, and gain insights into the latest developments in medical laboratory sciences.',

        ],
        contact: {
            description: '',
            email: '',
        },
    },
]


export const newsHeaders = [
    {
        title: 'Transforming Ideas Into Products And Services.',
        description: [
            'The South Eastern Kenya University Vice- Chancellor Prof. Eng. Douglas Shitanda, acampanied by the members of the University Management Board has officially opened the Research and Innovation Week 2025.',
            'In his speech, he encouraged SEKU fraternity to come up with innovation because this will help us reduce importation in the country since most things that are needed can be found locally.',
            'With this year’s theme; Transforming Ideas into Products and Services for sustainable development. He urged everyone to share their ideas, develop them into products that can be seen worldwide.',
            'The function was presided over by the Guest speaker DR. Devgan Subramanian who is currently coordinating the Fall armyworm IPM activities at icipe with support by the European Union, FCDO and USAID.',
        ],
        images: [],
        content: [],
        note: '',
    },
    {
        title: 'Advertisement For Work Study Programme',
        description: 'South Eastern Kenya University has work study program vacancies for fifty two (52) vacancies. This is therefore to invite applications from interested students in the work study programme with effect from April, 2025 2024/2025 Academic Year. Those interested to work during the May - August holidays are encouraged to apply.',
        images: [],
        content: [
            {
                title: 'Eligibility Criteria',
                description: '',
                list: [
                    'Evidence of financial need.',
                    'Be a full time student in SEKU.',
                    'Availability of work study vacancy in the following sections: Central Services, Library, Kitchen, Games and Sports, Choir, Landscaping or University Farm.',
                    'Must maintain high level of discipline during the programme.',
                    'Must have satisfactory academic standing.',
                    'Must have completed first semester of the first year in the University.',
                ]
            },
            {
                title: 'Application Procedure',
                description: '',
                list: [
                    'Visit the University website and log in.',
                    'Fill all the information requested for in the Online Work Study Application Form (OWSAF).',
                    'Attach any relevant support documents in the prescribed places in the Online Work Study Application Form (OWSAF).',
                    'After filling all the required information and inserting attachment online, please click on submit to complete the process.        ',
                ],
            },
            {
                title: 'Remuneration',
                description: '',
                list: [
                    'The students shall be paid the prevailing government minimum wage for skilled and unskilled (where applicable) workers.',
                    'The average work schedule shall be from 10 to 16 hours a week (1.25 to 2 days /week).',
                    'For further enquiries, send email to workstudy@seku.ac.ke',

                ],
            },
        ],
        note: 'Giving false information in the application form will lead to disqualification. The application is open till 21st April, 2025',
    }
]