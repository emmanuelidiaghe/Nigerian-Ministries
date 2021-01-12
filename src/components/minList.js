const minList = [
    {
      id: 1,
      name: 'Federal Ministry Of Agriculture & Natural Resources',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Fed. Capital Territory Office Complex Block A, Area 11 (Eleven) P.M.B. 135, Garki, Abuja, FCT',
      website: 'www.justice.gov.ng'
    },
    {
      id: 2,
      name: 'Federal Ministry Of Aviation',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Lagos State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.works.gov.ng'
    },
    {
      id: 3,
      name: 'Federal Ministry Of Commerce & Tourism',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 4,
      name: 'Federal Ministry Of Information & Communications',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 5,
      name: 'Federal Ministry Of Defence',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 6,
      name: 'Federal Ministry Of Education & Youth Dev.',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 7,
      name: 'Federal Ministry Of Environment',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 8,
      name: 'Federal Ministry For Federal Capital Territory',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 9,
      name: 'Federal Ministry Of Finance & Economic Development',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 10,
      name: 'Ministry Of Foreign Affairs',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 11,
      name: 'Federal Ministry Of Health & Social Services',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 12,
      name: 'Federal Ministry Of Industries',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 13,
      name: 'Federal Ministry Of Culture Tourism And National Orientation',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 14,
      name: 'Federal Ministry Of Internal Affairs',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 15,
      name: 'Federal Ministry Of Justice',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 16,
      name: 'Federal Ministry Of Labour & Productivity',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 17,
      name: 'Federal Ministry Of Petroleum Resources',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 18,
      name: 'Federal Ministry Of Power & Steel',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 19,
      name: 'Federal Ministry Of Science & Technology',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 20,
      name: 'Federal Ministry Of Solid Minerals Development',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 21,
      name: 'Federal Ministry Of Special Duties',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 22,
      name: 'Federal Ministry Of Transport',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 23,
      name: 'Federal Ministry Of Water Resources & Rural Development',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id:24,
      name: 'Federal Ministry Of Women Affairs & Social Development',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 25,
      name: 'Federal Ministry Of Works & Housing',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    },
    {
      id: 26,
      name: 'Federal Ministry Of Youth & Sport',
      minister: 'Malam Abubakar Malami',
      minister_state: 'Dr James Ibori',
      origin: 'Kano State',
      address: 'Federal Secretariat Towers, Shehu Shagari Way Central Area, P.M.B. 192, Garki, Abuja, Nigeria.',
      website: 'www.justice.gov.ng'
    }
  ];
  
  export default minList;