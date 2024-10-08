"use client";
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export function HomePage() {
  const router = useRouter();
  return (
    <>
      <header className="sticky top-0 z-20  bg-gray-950 backdrop-blur-sm text-white">
        <div className="container mx-auto flex h-14 text-xl max-w-6xl items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            
            <span className="font-bold text-[#308157] text-2xl">AgriConnect  </span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              className="flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-colors hover:bg-[#003B36]"
              href="#"
            >
              <HomeIcon className="h-5 w-5" />
              <span className=" ">Home</span>
            </Link>
          
            <Link
              className="flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-colors hover:bg-gray-100 dark:hover:bg-[#003B36]"
              href=""
            >
              <HomeIcon className="h-5 w-5" />
              <span className=" ">Marketplace</span>
            </Link>
            <Link
              className="flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-colors hover:bg-gray-100 dark:hover:bg-[#003B36]"
              href="/cropmonitoring"
            >
              <GaugeIcon className="h-5 w-5" />
              <span className=" ">Monitoring</span>
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            
          
          </div>
        </div>
      </header>
      <main className="container mx-auto grid  grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[1fr_300px] md:px-6">
        <div className="space-y-6 grid grid-cols-1 rounded-xl">
          
          <div className="grid gap-4 rounded-xl border border-gray-200 bg-gray-200 p-4 md:grid-cols-2 lg:grid-cols-1 ">
            <div className="flex  gap-3">
              <Avatar>
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>RP</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Raghu Parmar</span>
                  <span className="text-green-700 ">Warehouse Owner</span>
                  <span className="text-gray-500 dark:text-gray-400" />
                </div>
                <p>
                  Sehore,MP
                </p>
                
                <div className="flex items-center gap-2">
                <button className=" w-[10vw] h-8 rounded-xl bg-green-800 text-white border border-white">
                Avg. Price - ₹2000
                </button>
                  <Button className="rounded-full" size="icon" onClick={() => {
                    localStorage.setItem('chat',"Dr. Raghu Parmar");
                    router.push('/chatting');
                  }} variant="ghost">
                    <MessageCircleIcon className="h-5 w-5" />
                    <span className="sr-only">Reply</span>
                  </Button>
                  
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <HeartIcon className="h-5 w-5" />
                    <span className="sr-only">Like</span>
                  </Button>
                  
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage alt="@jaredpalmer" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Jagdish Paliwal</span>
                  <span className="text-green-700">Farmer</span>
                  <span className="" />
                </div>
                <p>Cotton Producer </p>
                <div className="flex items-center gap-2">
                <button className="w-[10vw] h-8 rounded-xl border bg-green-800 text-white border-white">
                Avg.Price- ₹230/kg
                </button>
                <Button className="rounded-full" size="icon" onClick={() => {
                                        localStorage.setItem('chat',"Jared Palmer");
                                        router.push('/chatting');
                  }} variant="ghost">
                    <MessageCircleIcon className="h-5 w-5" />
                    <span className="sr-only">Reply</span>
                  </Button>
                  
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <HeartIcon className="h-5 w-5" />
                    <span className="sr-only">Like</span>
                  </Button>
                  
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage alt="@maxleiter" src="/placeholder-avatar.jpg" />
                <AvatarFallback>ML</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Manoj Lodhi</span>
                  <span className="text-green-700">Bima Officer</span>
                  <span className="" />
                </div>
                <p>Get Crop Insurance! </p>
                <div className="flex items-center gap-2">
                <button className=" w-[10vw] h-8 rounded-xl border bg-green-800 text-white border-white">
                Avg.Price- ₹500
                </button>
                <Button className="rounded-full" size="icon" onClick={() => {
                                        localStorage.setItem('chat',"Max Lieter");
                                        router.push('/chatting');
                  }} variant="ghost">
                    <MessageCircleIcon className="h-5 w-5" />
                    <span className="sr-only">Reply</span>
                  </Button>
                  
                    <HeartIcon className="h-5 w-5" />
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <span className="sr-only">Like</span>
                  </Button>
                  
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage alt="@shuding_" src="/placeholder-avatar.jpg" />
                <AvatarFallback>RG</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Rajat Yadav</span>
                  <span className="text-green-700">Dairy</span>
                  <span className="" />
                </div>
                <p>
                  Dairy
                </p>
                <div className="flex items-center gap-2">
                <button className=" w-[10vw] h-8 rounded-xl bg-green-800 text-white border border-white">
                Avg.Price- ₹58/L
                </button>
                <Button className="rounded-full" size="icon" onClick={() => {
                                      localStorage.setItem('chat',"Dr. Shu Ding");
                                      router.push('/chatting');
                  }} variant="ghost">
                    <MessageCircleIcon className="h-5 w-5" />
                    <span className="sr-only">Reply</span>
                  </Button>
                  
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <HeartIcon className="h-5 w-5" />
                    <span className="sr-only">Like</span>
                  </Button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
        <Card>
            <CardHeader>
              <CardTitle className="text-[#308157]">Trending Fertilizers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">125k+ users</p>
                    <p className="text-base font-medium"> MotherEarth</p>
                  </div>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-5 w-5" />
                    <span className="sr-only">More</span>
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">100k+ users</p>
                    <p className="text-base font-medium">EF Polymers</p>
                  </div>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-5 w-5" />
                    <span className="sr-only">More</span>
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">87k+ users</p>
                    <p className="text-base font-medium">Kisan Khaad</p>
                  </div>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-5 w-5" />
                    <span className="sr-only">More</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-[#308157]">Cold Storages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Ashta</p>
                    <p className="text-base font-medium">Ramesh Chandra</p>
                  </div>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-5 w-5" />
                    <span className="sr-only">More</span>
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Sehore</p>
                    <p className="text-base font-medium">Dinesh Sharma</p>
                  </div>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-5 w-5" />
                    <span className="sr-only">More</span>
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Datana</p>
                    <p className="text-base font-medium">Salim Khan</p>
                  </div>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-5 w-5" />
                    <span className="sr-only">More</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-[#308157]">Exporter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-base font-medium">Rashmi Exports</p>
                    </div>
                  </div>
                  <Button className="rounded-full" size="sm" variant="primary">
                    Contact
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage alt="@jaredpalmer" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-base font-medium">Indra Dairy Pvt. Ltd.</p>
                    </div>
                  </div>
                  <Button className="rounded-full" size="sm" variant="primary">
                    Contact
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage alt="@maxleiter" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-base font-medium">Mahesh Cotton Mill</p>
                    </div>
                  </div>
                  <Button className="rounded-full" size="sm" variant="primary">
                    Contact
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function EllipsisVerticalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  )
}


function GaugeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function HashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function RepeatIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}