# [R1-B-03 & R1-B-04] Spot Uniqueness & Deletion Guards

- **Product Area:** Area B (Spots & Categories)
- **User Story:** R1-B-03, R1-B-04
- **Functional Requirement:** FR-2
- **Status:** 🟡 Pending Implementation

## User Stories
- As a Trip Planner, I'd like a spot to only ever be added once.
- As a Trip Planner, I'd like to delete spots I've personally added (provided they are not currently in any day plans).

## Acceptance Criteria
- [ ] Enforce uniqueness on spots within a trip (or source URL / location uniqueness per trip as appropriate).
- [ ] Backend delete endpoint (`DELETE /trips/:tripId/spots/:id`) ensuring only the owning user can delete their added spot.
- [ ] Guard deletion: prevent deleting a spot if it currently exists in any `DayPlanSpot` across the trip (return 422 with descriptive error).
- [ ] Frontend UI to delete personal spots (disabled or guarded with tooltip/message if currently in use in a day plan).
