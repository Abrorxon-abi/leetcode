// Problem Statement: https://leetcode.com/problems/defanging-an-ip-address/description/

function defangIPaddr(address: string): string {
  return address.replaceAll(".", "[.]");
}
