'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { cn } from '@/lib/utils'

interface ReservationFormProps {
  className?: string
}

export default function ReservationForm({ className = '' }: Partial<ReservationFormProps>) {
  const [status, setStatus] = useState('')

  return (
    <form
      id="reservations"
      className={cn('grid gap-5 rounded-xl border bg-card p-6 shadow-md md:grid-cols-2 md:p-8', className)}
      onSubmit={async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const payload = Object.fromEntries(formData.entries())
        const res = await fetch('/api/reservations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        setStatus(res.ok ? 'Reservation request sent. We will confirm shortly.' : 'Unable to submit. Please try again.')
      }}
    >
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" placeholder="Giulia Rossi" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="you@email.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="date">Date</Label>
        <Input id="date" name="date" type="date" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="time">Time</Label>
        <Input id="time" name="time" type="time" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="partySize">Party Size</Label>
        <Input id="partySize" name="partySize" type="number" min={1} max={20} placeholder="2" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="seating">Seating Preference</Label>
        <Select id="seating" name="seating" defaultValue="">
          <option value="" disabled>
            Select seating
          </option>
          <option value="indoor">Indoor</option>
          <option value="patio">Patio</option>
          <option value="bar">Bar</option>
        </Select>
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="occasion">Occasion</Label>
        <Input id="occasion" name="occasion" placeholder="Birthday, anniversary, business dinner..." />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" name="notes" placeholder="Dietary needs, accessibility requests, special preferences..." rows={4} />
      </div>
      <div className="md:col-span-2">
        <Button type="submit" className="w-full rounded-lg bg-[#722F37] text-white hover:bg-[#5f272e]">
          Send Reservation Request
        </Button>
        {status ? <p className="mt-3 text-sm text-muted-foreground">{status}</p> : null}
      </div>
    </form>
  )
}
