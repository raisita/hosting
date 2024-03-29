$(document).ready(function () {

   $('.intro-title').html('Hi, I&#39m Raisa Hidalgo');

   /* Summary */
   $('#sum01').html('Senior IT Developer proficient in Microsoft Dynamics CRM application customization seeking opportunities to expand and apply management and organizational skills.')
   $('#sum02').html('I am a self-motivated, enthusiastic, flexible and responsible team player who will work hard and excel in any environment. I form good relationships with my peers and staff and I am confident in dealing with individuals at all levels. My experience has taught me how to find the most effective ways to achieve any objective.')

/* skills */
  $('#sk01').html('Programming, Management');
  $('#sk02').html('Microsoft Dynamics 365');
  $('#sk03').html('Web Technologies HTML5, CSS, JavaScript, Ajax, jQuery, JSON, DOM');
  $('#sk04').html('SQL');
  $('#sk05').html('Reporting Services (SSRS)');
  $('#sk06').html('C#, C++, Visual Basic');

/* Languages */
$('#lang1').html('English - Fluent');
$('#lang2').html('Spanish - Native');

/* About */
 $('#about1').html('8 years of experience in developing business solutions using Microsoft Dynamics CRM on premise, SQL Server and Reporting Services.');
 $('#about2').html('Installed, developed, implemented and integrated new systems and services into the local CRM architecture.');
 $('#about3').html('Assisted with deployment and provisioning activities as well as gather and define feature requirements and project planning.');
 $('#about4').html('Experienced with building Entities, Views, Forms, Business Rules, Business Workflows, JavaScript Web Resources, Ribbon Workbench, Charts, Extensions, Data Maps and Imports, Configuration, Customization.');
 $('#about5').html('Maintained a platform roadmap, modified the sitemap file to display all the related entities in navigation bar for new app extensions and used jQuery & JavaScript for client-side validations and access data within the CRM application.');

/* Education */
$('#edu1').html('Master in Management of Science, Technology, Innovation and Scientific Policy - 2016');
$('#edu2').html('Master in Senior Management (MBA) - 2011');
$('#edu3').html('Bachelors Degree in Computer Sciences Information System - 1989');

 /* Professional Experience */ 
  $('#profesional-subtitle').html('Work Experience during the last 10 Years');

   var datos={
     dph:{
        nombre: 'Despachos Portuarios Hispaniola / Hispaniola Port Dispatch',
        periodo: '2019 - Present',
        cargo: 'Programmer Analyst',
        descripcion1: 'Designed, developed, built, tested, and deployed Microsoft Dynamics 365 CRM system enhancements that include formula fields, field dependencies, validation rules, workflow rules and actions, approval processes, reporting, dashboards, system upgrades and SQL custom scripts.',
        descripcion2: 'Participated in all phases of the software development lifecycle, focused on discovery, analysis, requirements definition, solution design, configuration, code development, providing required assistance for testing, deployment, and support.'
    }
    , tkl:{
        nombre: 'TekNowLogic',
        periodo: '2013 - 2019',
        cargo: 'Technology Consultant',
        descripcion1: 'Designed and developed several applications for different customers on the Microsoft Dynamics 365 CRM system with SQL custom scripts and Reporting Services (SSRS).',
        descripcion2: 'Participated in all phases of the software development lifecycle, focused on discovery, analysis, requirements definition, solution design, configuration, code, development providing required assistance for testing, deployment, and support.',
        descripcion3: 'Provided consulting and training to multiple customers on Microsoft Dynamics 365 Personalization and configuration.'
    }
    , unibe:{
        nombre: 'University Iberoamericana (UNIBE)',
        periodo: '2013 - Present',
        cargo: 'Professor',
        descripcion1: 'Professor in the school of Engineering in Information Technology and Communication.',
        descripcion2: 'Certified in various teaching methods and techniques such as: collaborative learning, problem-based learning, case analysis, virtual classroom, rubric evaluation and essay evaluation.',
        descripcion3: 'Participated as speaker at the Innovative Classes Conferences and several university activities for cultural and educational purposes.'
      }
 }
 $('.resume-title1').html(datos.dph.nombre);
 $('.resume-title2').html(datos.tkl.nombre);
 $('.resume-title3').html(datos.unibe.nombre);

 $('.resume-car1').html(datos.dph.cargo);
 $('.resume-car2').html(datos.tkl.cargo);
 $('.resume-car3').html(datos.unibe.cargo);

 $('.resume-per1').html(datos.dph.periodo);
 $('.resume-per2').html(datos.tkl.periodo);
 $('.resume-per3').html(datos.unibe.periodo);

 $('#resume-descri1').html(datos.dph.descripcion1);
 $('#resume-descri2').html(datos.dph.descripcion2);
 $('#resume-descri3').html(datos.tkl.descripcion1); 
 $('#resume-descri4').html(datos.tkl.descripcion2); 
 $('#resume-descri5').html(datos.tkl.descripcion3); 
 $('#resume-descri6').html(datos.unibe.descripcion1);
 $('#resume-descri7').html(datos.unibe.descripcion2);
 $('#resume-descri8').html(datos.unibe.descripcion3);
 });
