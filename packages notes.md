### NPM Vulnerabilities/Upgrades

The following packages were manually updated to solve the following reason:

1. "ssri@^6.0.1"
- react-scripts@4.0.3 requires ssri@^6.0.1 via a transitive dependency on cacache@12.0.4
- Resolution: "ssri": ">=8.0.1"

> CVE-2021-27290
Vulnerable versions: >= 5.2.2, < 8.0.1
Patched version: 8.0.1
ssri 5.2.2-8.0.0, fixed in 8.0.1, processes SRIs using a regular expression which is vulnerable to a denial of service. Malicious SRIs could take an extremely long time to process, leading to denial of service. This issue only affects consumers using the strict option.


2. "is-svg@^3.0.0"
- react-scripts@4.0.3 requires is-svg@^3.0.0 via a transitive dependency on postcss-svgo@4.0.2
- Resolution: "is-svg": ">=4.2.2"

> CVE-2021-28092
Vulnerable versions: >= 2.1.0, < 4.2.2
Patched version: 4.2.2
The is-svg package 2.1.0 through 4.2.1 for Node.js uses a regular expression that is vulnerable to Regular Expression Denial of Service (ReDoS). If an attacker provides a malicious string, is-svg will get stuck processing the input for a very long time.