'use client'

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

export default function AnimatedIntegrationsSection() {
    return (
        <div className="relative w-full max-w-[1000px] h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:h-[600px] mx-auto py-8 sm:py-12 md:py-16">
            <div className="aspect-square group relative mx-auto flex max-w-[20rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[32rem] items-center justify-between">
                <div
                    role="presentation"
                    className="bg-gradient-to-b border-foreground/5 absolute inset-0 z-10 aspect-square animate-spin items-center justify-center rounded-full border-t from-lime-500/25 to-transparent to-25% opacity-30 duration-[3.5s] group-hover:opacity-100 dark:from-white/10"></div>
                <div
                    role="presentation"
                    className="bg-gradient-to-b border-foreground/5 absolute inset-16 z-10 aspect-square scale-90 animate-spin items-center justify-center rounded-full border-t from-blue-500/25 to-transparent to-25% opacity-30 duration-[3.5s] group-hover:opacity-100"></div>
                <div className="bg-gradient-to-b from-muted-foreground/15 absolute inset-0 flex aspect-square items-center justify-center rounded-full border-t to-transparent to-25%">
                    <IntegrationCard className="-translate-x-1/6 absolute left-0 top-1/4 -translate-y-1/4">
                        <Image
                            src="/images/Integration page - sign/first fold 1group/logos/googledrive_logo.png"
                            alt="Google Drive"
                            width={60}
                            height={60}
                            className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                        />
                    </IntegrationCard>
                    <IntegrationCard className="absolute top-0 -translate-y-1/2">
                        <Image
                            src="/images/Integration page - sign/first fold 1group/logos/dropbox_logo.png"
                            alt="Dropbox"
                            width={60}
                            height={60}
                            className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                        />
                    </IntegrationCard>
                    <IntegrationCard className="translate-x-1/6 absolute right-0 top-1/4 -translate-y-1/4">
                        <Image
                            src="/images/Integration page - sign/first fold 1group/logos/box_logo.png"
                            alt="Box"
                            width={60}
                            height={60}
                            className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                        />
                    </IntegrationCard>
                </div>
                <div className="bg-gradient-to-b from-muted-foreground/15 absolute inset-16 flex aspect-square scale-90 items-center justify-center rounded-full border-t to-transparent to-25%">
                    <IntegrationCard className="absolute top-0 -translate-y-1/2">
                        <Image
                            src="/images/Integration page - sign/first fold 1group/logos/hubspot_logo.png"
                            alt="HubSpot"
                            width={60}
                            height={60}
                            className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                        />
                    </IntegrationCard>
                    <IntegrationCard className="absolute left-0 top-1/4 -translate-x-1/4 -translate-y-1/4">
                        <Image
                            src="/images/Integration page - sign/first fold 1group/logos/monday_logo.png"
                            alt="Monday.com"
                            width={60}
                            height={60}
                            className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                        />
                    </IntegrationCard>
                    <IntegrationCard className="absolute right-0 top-1/4 -translate-y-1/4 translate-x-1/4">
                        <Image
                            src="/images/Integration page - sign/first fold 1group/logos/pipedrive_logo.png"
                            alt="Pipedrive"
                            width={60}
                            height={60}
                            className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                        />
                    </IntegrationCard>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto flex w-fit justify-center gap-2">
                    <div className="bg-[#1A1C20] relative z-20 rounded-full border border-[#5B5858]/30 p-3 sm:p-4 shadow-2xl">
                        <div className="bg-[#0D0E11] rounded-full border border-[#3A3C40]/50 p-2 sm:p-3">
                            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-[#1E2028] to-[#0A0B0E] border border-[#2A2C30]/60">
                                <Image
                                    src="/images/Integration page - sign/Vector1.svg"
                                    alt="Sign Logo"
                                    width={64}
                                    height={64}
                                    className="object-contain w-6 h-7 sm:w-7 sm:h-8 md:w-8 md:h-10 lg:w-10 lg:h-12 filter brightness-125"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const IntegrationCard = ({ children, className, isCenter = false }: { children: React.ReactNode; className?: string; isCenter?: boolean }) => {
    return (
        <div className={cn('relative z-30 flex rounded-full border border-[#5B5858]/20 bg-[#1A1C20] shadow-lg shadow-black/20', isCenter ? 'size-16 sm:size-18 md:size-20 lg:size-24' : 'size-12 sm:size-14 md:size-16 lg:size-20', className)}>
            <div className={cn('m-auto size-fit')}>{children}</div>
        </div>
    )
}