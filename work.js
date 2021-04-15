$(document).ready(function () {

   $('.intro-title').html('Hi, I&#39m Raisa Hidalgo');

/* skills */
  $('#sk01').html('Microsoft Dynamics 365');
  $('#sk02').html('SQL');
  $('#sk03').html('javascript');
  $('#sk04').html('HTML/CSS');
  $('#sk05').html('C#, C++');
  $('#sk06').html('Visual Basic');

/* Languages */
$('#lang1').html('English - Fluent');
$('#lang2').html('Spanish - Native');

/* About */
 $('#about1').html('I am a self motivated, enthusiastic, flexible and responsible team player who will work hard and excel in any environment.');
 $('#about2').html('I am able to form good relationships with my peers and staff. I am confident in dealing with individuals at all levels. My experience has taught me how to find the most efective ways to achieve any objective.');
 
/* Education */
$('#edu1').html('Master in Management of Science, Technology, Innovation and Scientific Policy - 2016');
$('#edu2').html('Master in Senior Management (MBA) - 2011');
$('#edu3').html('Bachelors Degree in Computer Sciences Information System - 1989');

 /* Professional Experience */ 
  $('#profesional-subtitle').html('Companies located in Santo Domingo, Dominican Republic');

   var datos={
     dph:{
        nombre: 'Despachos Portuarios Hispaniola',
        periodo: '2019 - Present',
        cargo: 'Programming Analyst',
        descripcion: 'Successfully developed information systems in Dynamics CRM 365 that:',
        job1: 'Calculate the amount to be paid for delays incurred by the use of containers, chassis, gensets and other charges.',
        job2: 'Generate invoices, credit notes, payment receipts and refund checks.',
        job3: 'Streamline daily closing and restart processes.',
        job4: 'Generate automatic notifications and customer account statements.',
      }
    , tkl:{
        nombre: 'TekNowLogic',
        periodo: '2013 - 2019',
        cargo: 'Tecnology Consultant',
        descripcion: 'Responsible for the development of applications, integration, consulting and training.',
        job1: 'Developed software for the Dominican national water company, INAPA. This software simplified updating the company’s database of customers, properties and collection rates. It also allowed for the automatic generation of invoices for every province in the country.',
        job2: 'Developed and implemented multiple customer service modules for the company, Grupo Rica.',
        job3: 'Developed software related to the insurance policies of farmers for the insurance company, Agrodosa.',
        job4: 'Developed and implemented the information system using the Microsoft Dynamics CRM 365 platform for DPH.',
       }
    , unibe:{
        nombre: 'University Iberoamericana (UNIBE)',
        periodo: '2013 - Present:',
        cargo: 'Professor',
        descripcion: 'Certified professor in the UNIBE Educational Model.',
        job1: 'Certified for the application of teaching methods and techniques such as: collaborative learning, problem-based learning, case analysis, virtual classroom, rubric evaluation and essay evaluation.',
        job2: 'Speaker at UNIBE&#39s Innovative Classes Conference since 2013.',
        job3: 'Professor of operating systems, computer architecture, management information systems and programming languages corresponding to the curricula of the schools of Engineering in Information Technology and Communication, and Civil Engineering.',
       }
    , dpworld:{
        nombre: 'Dp World Caucedo',
        periodo: '2004 - 2012',
        cargo: 'IT Manager',
        descripcion: 'Responsible for the management and operation of the technology department.',
        job1: 'Responsible for preparing, proposing and updating the Strategic Technology Plan.',
        job2: 'Responsible for the IT Budget, Performance Indicators (KPI), Contingency and Technology Continuity Plans, and the IT staff Training plan.',
        job3: 'Responsible for the implementation of the management systems of operations, administration, finance and customer services for the company.',
        job4: 'Managed technological infrastructure update projects.',
     }
}
 $('.resume-title1').html(datos.dph.nombre);
 $('.resume-title2').html(datos.tkl.nombre);
 $('.resume-title3').html(datos.unibe.nombre);
 $('.resume-title4').html(datos.dpworld.nombre);

 $('.resume-car1').html(datos.dph.cargo);
 $('.resume-car2').html(datos.tkl.cargo);
 $('.resume-car3').html(datos.unibe.cargo);
 $('.resume-car4').html(datos.dpworld.cargo);

 $('.resume-per1').html(datos.dph.periodo);
 $('.resume-per2').html(datos.tkl.periodo);
 $('.resume-per3').html(datos.unibe.periodo);
 $('.resume-per4').html(datos.dpworld.periodo);

 $('#resume-descri1').html(datos.dph.descripcion);
 $('#resume-descri2').html(datos.tkl.descripcion); 
 $('#resume-descri3').html(datos.unibe.descripcion);
 $('#resume-descri4').html(datos.dpworld.descripcion);

 $('#resume-jobd1').html(datos.dph.job1);
 $('#resume-jobt1').html(datos.tkl.job1); 
 $('#resume-jobu1').html(datos.unibe.job1);
 $('#resume-jobw1').html(datos.dpworld.job1);

 $('#resume-jobd2').html(datos.dph.job2);
 $('#resume-jobt2').html(datos.tkl.job2); 
 $('#resume-jobu2').html(datos.unibe.job2);
 $('#resume-jobw2').html(datos.dpworld.job2);

 $('#resume-jobd3').html(datos.dph.job3);
 $('#resume-jobt3').html(datos.tkl.job3); 
 $('#resume-jobu3').html(datos.unibe.job3);
 $('#resume-jobw3').html(datos.dpworld.job3);

 $('#resume-jobd4').html(datos.dph.job4);
 $('#resume-jobt4').html(datos.tkl.job4); 
 $('#resume-jobw4').html(datos.dpworld.job4);

 });
