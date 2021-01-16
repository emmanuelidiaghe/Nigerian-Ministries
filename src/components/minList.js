//Reference: The Statehouse, Abuja
//www.statehouse.gov.ng/people
//www.nigeriaembassyusa.org/index.php?page=federal-ministries
const minList = [
    {
      id: 0,
      name: 'Federal Ministry of Agriculture & Natural Resources',
      minister: 'Sabo Nanno',
      minister_state: 'Mustapha Shehuri',
      origin: 'Borno State',
      origin_state: 'Kaduna State',
      address: 'Fed. Capital Territory Office Complex Block A, Area 11 (Eleven) P.M.B. 135, Garki, Abuja, FCT',
      website: 'www.fmard.gov.ng'
    },
    {
      id: 1,
      name: 'Federal Ministry of Aviation',
      minister: 'Hadi Sirika',
      minister_state: 'N/A',
      origin: 'Katsina State',
      origin_state: 'N/A',
      address: 'Fed. Secretariat, Shehu Shagari Way, Abuja',
      website: 'www.aviation.gov.ng'
    },
    {
      id: 2,
      name: 'Federal Ministry of Commerce & Tourism',
      minister: 'Malam Abubakar Malami',
      minister_state: 'N/A',
      origin: 'Kano State',
      origin_state: 'N/A',
      address: 'Old Secretariat Area I, Block G & H, P.M.B. 88, Garki, Abuja',
      website: 'www.commerce.gov.ng'
    },
    {
      id: 3,
      name: 'Federal Ministry of Communication',
      minister: 'Ali Isa Pantami',
      minister_state: 'N/A',
      origin: 'Gombe State',
      origin_state: 'N/A',
      address: 'Federal Secretariat, 2nd & 3rd Floors, Abuja ',
      website: 'www.commtech.gov.ng'
    },
    {
      id: 4,
      name: 'Federal Ministry of Defence',
      minister: 'Bashir Salihi Magashi',
      minister_state: 'N/A',
      origin: 'Kano State',
      origin_state: 'N/A',
      address: 'Defence Headquarters, Opp. Agura Hotel, P.M.B. 196, Area 7, Garki, Abuja',
      website: 'www.defence.gov.ng'
    },
    {
      id: 5,
      name: 'Federal Ministry of Education & Youth Dev.',
      minister: 'Adamu Adamu',
      minister_state: 'Emeka Nwajiuba',
      origin: 'Bauchi State',
      origin_state: 'Kaduna State',
      address: 'Federal Secretariat, Phase 2 (3rd Floor), Shehu Shagari Way, Abuja',
      website: 'www.education.gov.ng'
    },
    {
      id: 6,
      name: 'Federal Ministry of Environment',
      minister: 'Muhammad Mahmood',
      minister_state: 'Sharon Ikeazor',
      origin: 'Kaduna State',
      origin_state: 'Kaduna State',
      address: 'Federal Secretariat Complex, 9th Floor, Shehu Shagari Way, PMB 468 Garki Abuja',
      website: 'www.environment.gov.ng'
    },
    {
      id: 7,
      name: 'Federal Ministry for Federal Capital Territory',
      minister: 'Mohammed Musa Bello',
      minister_state: 'Ramatu Tijani',
      origin: 'Adamawa State',
      origin_state: 'Kaduna State',
      address: 'Area 11, Garki, Abuja, P.M.B. 25, Garki, Abuja',
      website: 'www.fcda.gov.ng'
    },
    {
      id: 8,
      name: 'Federal Ministry of Finance & Economic Development',
      minister: 'Zainab Ahmed',
      minister_state: 'Clement Agba',
      origin: 'Kaduna State',
      origin_state: 'Edo State',
      address: '(Opposite Central Bank), P.M.B. 14, Garki, Abuja',
      website: 'www.finance.gov.ng'
    },
    {
      id: 9,
      name: 'Ministry of Foreign Affairs',
      minister: 'Geoffrey Onyeama',
      minister_state: 'Zubair Dada',
      origin: 'Enugu State',
      origin_state: 'Kaduna State',
      address: 'Maputo St., Wuse, Zone 3 (Opposite Nigeria Custom Services), P.M.B. 130, Garki, Abuja',
      website: 'www.foreignaffairs.gov.ng'
    },
    {
      id: 10,
      name: 'Federal Ministry of Health & Social Services',
      minister: 'Osagie Ehanire',
      minister_state: 'Adeleke Mamora',
      origin: 'Edo State',
      origin_state: 'Osun State',
      address: 'Block 4A (301-399), 3rd Floor, New Fed. Secretariat Complex, Shehu Shagari Way, P.M.B. 83, (Garki Post Office), Abuja',
      website: 'www.health.gov.ng'
    },
    {
      id: 11,
      name: 'Federal Ministry of Industries',
      minister: 'Richard Adeniyi Adebayo',
      minister_state: 'Amb MAryam Katagum',
      origin: 'Ekiti State',
      origin_state: 'Kaduna State',
      address: 'Old Federal Secretariat, Area 1, Garki, Block C, Abuja',
      website: 'www.fmiti.gov.ng'
    },
    {
      id: 12,
      name: 'Federal Ministry of Information & Culture',
      minister: 'Lai Mohammed',
      minister_state: 'N/A',
      origin: 'Kawara State',
      origin_state: 'N/A',
      address: 'Phase II Federal Secretariat; Shehu Shagari Way Abuja Nigeria.',
      website: 'www.fmic.gov.ng'
    },
    {
      id: 13,
      name: 'Federal Ministry of Interior',
      minister: 'Rauf Aregbesola',
      minister_state: 'N/A',
      origin: 'Osun State',
      origin_state: 'N/A',
      address: 'Block F Old Secretariat, Area I, Garki, Abuja, P.M.B. 0016, Garki Post Office',
      website: 'www.interior.gov.ng'
    },
    {
      id: 14,
      name: 'Federal Ministry of Justice',
      minister: 'Malam Abubakar Malami',
      minister_state: 'N/A',
      origin: 'Kebbi State',
      origin_state: 'N/A',
      address: 'New Fed. Secretariat Complex, 10th Floor, Federal Secretariat, Wing lB (1001-1099), Block One, Shehu Shagari Way, Abuja',
      website: 'www.justice.gov.ng'
    },
    {
      id: 15,
      name: 'Federal Ministry of Labour & Productivity',
      minister: 'Chris Ngige',
      minister_state: 'Tayo Alasodura',
      origin: 'Anambra State',
      origin_state: 'Kaduna State',
      address: '2nd Floor (257-237), Block 4A, New Federal Secretariat Complex, Shehu Shagari Way Central Area, Abuja',
      website: 'www.labour.gov.ng'
    },
    {
      id: 16,
      name: 'Federal Ministry of Petroleum Resources',
      minister: 'Muhammadu Buhari',
      minister_state: 'Timipre Sylva',
      origin: 'Katsina State',
      origin_state: 'Kaduna State',
      address: 'Federal Secretariat, Shehu Shagari Way, Abuja',
      website: 'petroleumresources.gov.ng'
    },
    {
      id: 17,
      name: 'Federal Ministry of Power & Steel',
      minister: 'Sale Mamman',
      minister_state: 'Goddy Jedy Agba',
      origin: 'Taraba State',
      origin_state: 'Kaduna State',
      address: 'New Fed. Secretariat Complex, 3rd - 4th Floors, Annex B Shehu Shagari Way, Abuja',
      website: 'www.pwh.gov.ng'
    },
    {
      id: 18,
      name: 'Federal Ministry of Science & Technology',
      minister: 'Ogbannaya Onu',
      minister_state: 'Mohammed H. Abdullahi',
      origin: 'Ebonyi State',
      origin_state: 'Kaduna State',
      address: '9th Floor, New Fed. Government Secretariat (Opp. New Parade Ground), Shehu Shagari Way, Abuja',
      website: 'www.scienceandtech.gov.ng'
    },
    {
      id: 19,
      name: 'Federal Ministry of Mines and Steel Development',
      minister: 'Olamilekan Adegbite',
      minister_state: 'Uchechukwu Ogah',
      origin: 'Ogun State',
      origin_state: 'Kaduna State',
      address: '5th Floor, Annex 3, New Federal Secretariat Complex, Shehu Shagari Way, Central Area, Abuja',
      website: 'www.minesandsteel.gov.ng'
    },
    {
      id: 20,
      name: 'Federal Ministry of Special Duties',
      minister: 'George Akume',
      minister_state: 'N/A',
      origin: 'Benue State',
      origin_state: 'N/A',
      address: 'First Floor, Phase II, New Federal Secretariat, Shehu Shagari Way, Abuja.',
      website: 'www.sduties.gov.ng'
    },
    {
      id: 21,
      name: 'Federal Ministry of Transport',
      minister: 'Rotimi Amaechi',
      minister_state: 'Gbemisola Saraki',
      origin: 'Rivers State',
      origin_state: 'Kaduna State',
      address: '2nd Floor, Annex 3, New Fed. Secretariat Complex Shehu Shagari Way, Central Area, P.M.B. 1136, Abuja',
      website: 'www.transportation.gov.ng'
    },
    {
      id: 22,
      name: 'Federal Ministry of Water Resources & Rural Development',
      minister: 'Suleiman Adamu',
      minister_state: 'N/A',
      origin_state: 'N/A',
      origin: 'Jigawa State',
      address: 'P.M.B. 159, Block A, Old Secretariat Area I, Garki, Abuja.',
      website: 'www.waterresources.gov.ng'
    },
    {
      id:23,
      name: 'Federal Ministry of Women Affairs & Social Development',
      minister: 'Paulen Tallen',
      minister_state: 'N/A',
      origin: 'Plateau State',
      origin_state: 'N/A',
      address: '2nd Floor (201-224), Annex 3, New Federal Secretariat Complex, Shehu Shagari Way, P.M.B. 229, Central Area, Abuja, FCT.',
      website: 'www.women.gov.ng'
    },
    {
      id: 24,
      name: 'Federal Ministry of Works & Housing',
      minister: 'Babatunde FAshola',
      minister_state: 'Abubakar D. Aliyu',
      origin: 'Lagos State',
      origin_state: 'Kaduna State',
      address: "Radio House, Herbert Macaulay Way (South), P.M.B. ill, Garki, Abuja (Opp. Int'l. Conference Centre)",
      website: 'worksandhousing.gov.ng'
    },
    {
      id: 25,
      name: 'Federal Ministry of Youth & Sports',
      minister: 'Sunday Dare',
      minister_state: 'N/A',
      origin: 'Oyo State',
      origin_state: 'Kaduna State',
      address: 'New Federal Secretariat Complex, Maitama Sule, Garki, Abuja',
      website: 'www.youthdevelopment.gov.ng'
    },
    {
      id: 26,
      name: 'Ministry of Niger Delta',
      minister: 'Godswill Akpabio',
      minister_state: 'Festus Keyamo',
      origin: 'Akwa Ibom State',
      origin_state: 'Kaduna State',
      address: 'New Federal Secretariat Complex, Maitama Sule, Garki, Abuja',
      website: 'www.nigerdelta.gov.ng'
    },
    {
      id: 27,
      name: 'Ministry of Budget & National Planning',
      minister: 'Zainan Ahmed',
      minister_state: 'Clement Agba',
      origin: 'Akwa Ibom State',
      origin_state: 'Kaduna State',
      address: 'New Federal Secretariat Complex, Maitama Sule, Garki, Abuja',
      website: 'www.nationalplanning.gov.ng'
    },
    {
      id: 28,
      name: 'Ministry of Police Affairs',
      minister: 'Maigari Dingyadi',
      minister_state: 'N/A',
      origin: 'Sokoto State',
      origin_state: 'N/A',
      address: 'New Federal Secretariat Complex, Maitama Sule, Garki, Abuja',
      website: 'www.police.gov.ng'
    },
    {
      id: 29,
      name: 'Ministry of Humanitarian Affairs & Disaster Management',
      minister: 'Sadiya Umar Faruk',
      minister_state: 'N/A',
      origin: 'Sokoto State',
      origin_state: 'N/A',
      address: 'New Federal Secretariat Complex, Maitama Sule, Garki, Abuja',
      website: 'www.haffairs.gov.ng'
    }
  ];
  
  export default minList;