'use client'

import { contactInfo } from '../../../../constants/contact';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon, BuildingOfficeIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const ContactSection = () => {
    const [activeTab, setActiveTab] = useState<'university' | 'campuses'>('university');

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">{contactInfo.title}</h1>
                    <p className="text-xl text-gray-600">{contactInfo.university}</p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="flex rounded-lg overflow-hidden mb-8 bg-gray-100 p-1">
                        <button
                            onClick={() => setActiveTab('university')}
                            className={`flex-1 py-3 px-6 font-medium transition-colors ${activeTab === 'university'
                                ? 'bg-teal-600 text-white rounded-md shadow-md'
                                : 'text-gray-800 hover:bg-gray-200'
                                }`}
                        >
                            <BuildingOfficeIcon className="inline-block mr-2 w-5 h-5" />
                            {contactInfo.universityLines.title}
                        </button>
                        <button
                            onClick={() => setActiveTab('campuses')}
                            className={`flex-1 py-3 px-6 font-medium transition-colors ${activeTab === 'campuses'
                                ? 'bg-teal-600 text-white rounded-md shadow-md'
                                : 'text-gray-800 hover:bg-gray-200'
                                }`}
                        >
                            <AcademicCapIcon className="inline-block mr-2 w-5 h-5" />
                            {contactInfo.campusContacts.title}
                        </button>
                    </div>


                    <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
                        {activeTab === 'university' && (
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {contactInfo.universityLines.offices.map((office, index) => (
                                        <div key={index} className="rounded-lg p-5 transition-all hover:shadow-md">
                                            <h3 className="font-semibold text-teal-800 text-lg mb-3">{office.name}</h3>
                                            <ul className="space-y-2">
                                                {office.phones.map((phone, phoneIndex) => (
                                                    <li key={phoneIndex} className="flex items-center text-gray-700">
                                                        <PhoneIcon className="w-4 h-4 text-teal-600 mr-2" />
                                                        <a href={`tel:${phone}`} className="hover:text-teal-600 transition-colors">
                                                            {phone}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'campuses' && (
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {contactInfo.campusContacts.campuses.map((campus, index) => (
                                        <div key={index} className="bg-transparent rounded-lg p-6 transition-all hover:shadow-md">
                                            <h3 className="font-bold text-teal-800 text-xl mb-4">{campus.name}</h3>
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <MapPinIcon className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                                                    <div>
                                                        <p className="text-gray-700">{campus.poBox}</p>
                                                        {campus.location && <p className="text-gray-700">{campus.location}</p>}
                                                    </div>
                                                </li>
                                                <li className="flex items-center">
                                                    <PhoneIcon className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                                                    <a href={`tel:${campus.telephone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-teal-600 transition-colors">
                                                        {campus.telephone}
                                                    </a>
                                                </li>
                                                <li className="flex items-center">
                                                    <EnvelopeIcon className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                                                    <a href={`mailto:${campus.email}`} className="text-gray-700 hover:text-teal-600 transition-colors">
                                                        {campus.email}
                                                    </a>
                                                </li>
                                                <li className="flex items-center">
                                                    <GlobeAltIcon className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                                                    <a href={campus.website} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-600 transition-colors">
                                                        {campus.website.replace('https://', '')}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;