export interface Launch {
  mission_name: string;
  launch_date_utc: string;
  rocket: {rocket_name: string; rocket_id: string};
  launch_year: string;
  flight_number: number;
  launch_site?: {site_name_long: string};
}

// {
//     "flight_number": 75,
//     "mission_name": "Nusantara Satu (PSN-6) / GTO-1 / Beresheet",
//     "mission_id": [],
//     "launch_year": "2019",
//     "launch_date_unix": 1550799900,
//     "launch_date_utc": "2019-02-22T01:45:00.000Z",
//     "launch_date_local": "2019-02-21T20:45:00-05:00",
//     "is_tentative": false,
//     "tentative_max_precision": "hour",
//     "tbd": false,
//     "launch_window": null,
//     "rocket": {
//       "rocket_id": "falcon9",
//       "rocket_name": "Falcon 9",
//       "rocket_type": "FT",
//       "first_stage": {
//         "cores": [
//           {
//             "core_serial": "B1048",
//             "flight": 3,
//             "block": 5,
//             "gridfins": true,
//             "legs": true,
//             "reused": true,
//             "land_success": null,
//             "landing_intent": true,
//             "landing_type": "ASDS",
//             "landing_vehicle": "OCISLY"
//           }
//         ]
//       },
//       "second_stage": {
//         "block": 5,
//         "payloads": [
//           {
//             "payload_id": "Nusantara Satu (PSN-6)",
//             "norad_id": [],
//             "reused": false,
//             "customers": [
//               "Pasifik Satelit Nusantara"
//             ],
//             "nationality": "Indonesia",
//             "manufacturer": "SSL",
//             "payload_type": "Satellite",
//             "payload_mass_kg": 5000,
//             "payload_mass_lbs": 11023.11,
//             "orbit": "GTO",
//             "orbit_params": {
//               "reference_system": null,
//               "regime": null,
//               "longitude": null,
//               "semi_major_axis_km": null,
//               "eccentricity": null,
//               "periapsis_km": null,
//               "apoapsis_km": null,
//               "inclination_deg": null,
//               "period_min": null,
//               "lifespan_years": 15,
//               "epoch": null,
//               "mean_motion": null,
//               "raan": null,
//               "arg_of_pericenter": null,
//               "mean_anomaly": null
//             }
//           },
//           {
//             "payload_id": "GTO-1",
//             "norad_id": [],
//             "reused": false,
//             "customers": [
//               "Spaceflight Industries, Inc"
//             ],
//             "nationality": "United States",
//             "manufacturer": null,
//             "payload_type": "Unknown",
//             "payload_mass_kg": null,
//             "payload_mass_lbs": null,
//             "orbit": "GTO",
//             "orbit_params": {
//               "reference_system": "geocentric",
//               "regime": "geostationary",
//               "longitude": null,
//               "semi_major_axis_km": null,
//               "eccentricity": null,
//               "periapsis_km": null,
//               "apoapsis_km": null,
//               "inclination_deg": null,
//               "period_min": null,
//               "lifespan_years": null,
//               "epoch": null,
//               "mean_motion": null,
//               "raan": null,
//               "arg_of_pericenter": null,
//               "mean_anomaly": null
//             }
//           },
//           {
//             "payload_id": "Beresheet",
//             "norad_id": [],
//             "reused": false,
//             "customers": [
//               "SpaceIL"
//             ],
//             "nationality": "Israel",
//             "manufacturer": "SSL",
//             "payload_type": "Lander",
//             "payload_mass_kg": 585,
//             "payload_mass_lbs": 1289.7,
//             "orbit": "GTO",
//             "orbit_params": {
//               "reference_system": null,
//               "regime": null,
//               "longitude": null,
//               "semi_major_axis_km": null,
//               "eccentricity": null,
//               "periapsis_km": null,
//               "apoapsis_km": null,
//               "inclination_deg": null,
//               "period_min": null,
//               "lifespan_years": 0.00547945,
//               "epoch": null,
//               "mean_motion": null,
//               "raan": null,
//               "arg_of_pericenter": null,
//               "mean_anomaly": null
//             }
//           }
//         ]
//       },
//       "fairings": {
//         "reused": false,
//         "recovery_attempt": false,
//         "recovered": false,
//         "ship": null
//       }
//     },
//     "ships": [],
//     "telemetry": {
//       "flight_club": null
//     },
//     "launch_site": {
//       "site_id": "ccafs_slc_40",
//       "site_name": "CCAFS SLC 40",
//       "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//     },
//     "launch_success": null,
//     "links": {
//       "mission_patch": null,
//       "mission_patch_small": null,
//       "reddit_campaign": "https://www.reddit.com/r/spacex/comments/afxyrd/nusantara_satu_launch_campaign_thread/",
//       "reddit_launch": null,
//       "reddit_recovery": null,
//       "reddit_media": null,
//       "presskit": null,
//       "article_link": null,
//       "wikipedia": null,
//       "video_link": null,
//       "youtube_id": null,
//       "flickr_images": []
//     },
//     "details": null,
//     "upcoming": true,
//     "static_fire_date_utc": null,
//     "static_fire_date_unix": null,
//     "timeline": null
//   },
